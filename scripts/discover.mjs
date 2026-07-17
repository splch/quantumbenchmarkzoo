#!/usr/bin/env node
// Weekly benchmark discovery: harvest recent arXiv papers that look like they
// introduce a quantum benchmark, dedup against the catalog and prior runs,
// triage the remainder with Claude, and emit a markdown shortlist.
//
// Usage:
//   node scripts/discover.mjs [--days N] [--report FILE] [--skip-triage] [--max N]
//
// Exit code is 0 whether or not candidates are found; nonzero only on hard
// failure (network, auth, config). The report file is written only when the
// triage produced something worth a human's attention.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Anthropic from '@anthropic-ai/sdk';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONFIG_PATH = path.join(ROOT, '.github/discovery/config.json');
const SEEN_PATH = path.join(ROOT, '.github/discovery/seen.json');
const PROMPT_PATH = path.join(ROOT, '.github/discovery/triage-prompt.md');
const BENCHMARKS_DIR = path.join(ROOT, 'src/content/benchmarks');
const CATEGORIES_PATH = path.join(ROOT, 'src/lib/categories.ts');

// ---------------------------------------------------------------------------
// CLI

function parseArgs(argv) {
  const args = { days: null, report: null, skipTriage: false, max: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--days') args.days = Number(argv[++i]);
    else if (a === '--report') args.report = argv[++i];
    else if (a === '--skip-triage') args.skipTriage = true;
    else if (a === '--max') args.max = Number(argv[++i]);
    else throw new Error(`Unknown argument: ${a}`);
  }
  if (args.days !== null && (!Number.isFinite(args.days) || args.days <= 0)) {
    throw new Error('--days must be a positive number');
  }
  return args;
}

// ---------------------------------------------------------------------------
// arXiv Atom parsing (the feed is machine-generated with a fixed shape, so a
// targeted extractor is sufficient; fields never contain nested tags)

function unescapeXml(s) {
  return s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function textField(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? unescapeXml(m[1]).replace(/\s+/g, ' ').trim() : '';
}

function arxivIdFromUrl(url) {
  const m = url.match(
    /arxiv\.org\/(?:abs|pdf)\/(?:(\d{4}\.\d{4,5})|([a-z-]+(?:\.[A-Z]{2})?\/\d{7}))(?:v\d+)?/i,
  );
  return m ? (m[1] || m[2]).toLowerCase() : null;
}

function parseFeed(xml) {
  const totalMatch = xml.match(/<opensearch:totalResults[^>]*>(\d+)</);
  const total = totalMatch ? Number(totalMatch[1]) : null;
  const entries = [];
  for (const [, block] of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const idUrl = textField(block, 'id');
    const id = arxivIdFromUrl(idUrl);
    if (!id) continue;
    entries.push({
      id,
      url: `https://arxiv.org/abs/${id}`,
      title: textField(block, 'title'),
      abstract: textField(block, 'summary'),
      published: textField(block, 'published'),
      authors: [...block.matchAll(/<name>([^<]*)<\/name>/g)].map((m) =>
        unescapeXml(m[1]).trim(),
      ),
      categories: [...block.matchAll(/<category[^>]*term="([^"]+)"/g)].map((m) => m[1]),
    });
  }
  return { total, entries };
}

// ---------------------------------------------------------------------------
// arXiv harvest

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function buildQuery(cfg) {
  const quote = (t) => (t.includes(' ') ? `"${t}"` : t);
  const cats = cfg.categories.map((c) => `cat:${c}`).join(' OR ');
  const terms = cfg.terms
    .flatMap((t) => [`ti:${quote(t)}`, `abs:${quote(t)}`])
    .join(' OR ');
  return `(${cats}) AND (${terms})`;
}

async function fetchFeedPage(query, start, pageSize) {
  const url = new URL('https://export.arxiv.org/api/query');
  url.searchParams.set('search_query', query);
  url.searchParams.set('start', String(start));
  url.searchParams.set('max_results', String(pageSize));
  url.searchParams.set('sortBy', 'submittedDate');
  url.searchParams.set('sortOrder', 'descending');

  let lastError = null;
  for (let attempt = 1; attempt <= 4; attempt++) {
    if (attempt > 1) await sleep(3000 * 2 ** (attempt - 2));
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(60_000) });
      if (!res.ok) {
        lastError = new Error(`arXiv API returned HTTP ${res.status}`);
        continue;
      }
      const feed = parseFeed(await res.text());
      // arXiv occasionally returns a transiently empty feed; retry those.
      if (feed.entries.length === 0 && feed.total !== null && feed.total > start) {
        lastError = new Error('arXiv API returned an empty page unexpectedly');
        continue;
      }
      return feed;
    } catch (err) {
      lastError = err;
    }
  }
  throw new Error(`arXiv fetch failed after 4 attempts: ${lastError?.message}`);
}

async function harvest(cfg, days) {
  const query = buildQuery(cfg);
  const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const papers = [];
  for (let page = 0; page < cfg.maxPages; page++) {
    if (page > 0) await sleep(3100); // arXiv asks for >= 3s between requests
    const start = page * cfg.pageSize;
    const feed = await fetchFeedPage(query, start, cfg.pageSize);
    let reachedCutoff = false;
    for (const entry of feed.entries) {
      if (new Date(entry.published) < cutoff) {
        reachedCutoff = true;
        break;
      }
      papers.push(entry);
    }
    const exhausted = feed.total !== null && start + feed.entries.length >= feed.total;
    if (reachedCutoff || exhausted || feed.entries.length === 0) return papers;
  }
  console.warn(`warning: stopped at maxPages=${cfg.maxPages} before reaching the date cutoff`);
  return papers;
}

// ---------------------------------------------------------------------------
// Catalog dedup keys

function stripQuotes(s) {
  const t = s.trim();
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

function frontmatterOf(text) {
  const lines = text.split('\n');
  if (lines[0]?.trim() !== '---') return [];
  const end = lines.indexOf('---', 1);
  return end === -1 ? [] : lines.slice(1, end);
}

function loadCatalog() {
  const entries = [];
  for (const file of fs.readdirSync(BENCHMARKS_DIR).sort()) {
    if (!file.endsWith('.md')) continue;
    const text = fs.readFileSync(path.join(BENCHMARKS_DIR, file), 'utf8');
    const fm = frontmatterOf(text);

    let name = '';
    const aliases = [];
    for (let i = 0; i < fm.length; i++) {
      const line = fm[i];
      const nameMatch = line.match(/^name:\s*(.+)$/);
      if (nameMatch) name = stripQuotes(nameMatch[1]);
      const inlineAliases = line.match(/^aliases:\s*\[(.*)\]\s*$/);
      if (inlineAliases) {
        for (const part of inlineAliases[1].split(',')) {
          const v = stripQuotes(part);
          if (v) aliases.push(v);
        }
      } else if (/^aliases:\s*$/.test(line)) {
        for (let j = i + 1; j < fm.length; j++) {
          const item = fm[j].match(/^\s+-\s+(.+)$/);
          if (!item) break;
          aliases.push(stripQuotes(item[1]));
        }
      }
    }

    const urls = [...text.matchAll(/https?:\/\/[^\s"'<>()\[\]]+/g)].map((m) => m[0]);
    const arxivIds = new Set(urls.map(arxivIdFromUrl).filter(Boolean));
    entries.push({ slug: file.replace(/\.md$/, ''), name, aliases, arxivIds });
  }
  return entries;
}

function loadCategoryIds() {
  const src = fs.readFileSync(CATEGORIES_PATH, 'utf8');
  const union = src.match(/export type CategoryId =([\s\S]*?);/);
  if (!union) throw new Error(`Could not parse CategoryId union from ${CATEGORIES_PATH}`);
  const ids = [...union[1].matchAll(/'([a-z-]+)'/g)].map((m) => m[1]);
  if (ids.length === 0) throw new Error('No category ids found in categories.ts');
  return ids;
}

function loadCategoryDescriptions() {
  const src = fs.readFileSync(CATEGORIES_PATH, 'utf8');
  const out = [];
  for (const m of src.matchAll(
    /id:\s*'([a-z-]+)',\s*label:\s*'[^']*',\s*description:\s*'((?:[^'\\]|\\.)*)'/g,
  )) {
    out.push({ id: m[1], description: m[2].replace(/\\'/g, "'") });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Triage via the Claude API

function triageSchema(categoryIds) {
  return {
    type: 'object',
    additionalProperties: false,
    required: [
      'verdict',
      'confidence',
      'proposed_name',
      'suggested_category',
      'matches_existing_entry',
      'rationale',
    ],
    properties: {
      verdict: {
        type: 'string',
        enum: ['new-benchmark', 'results-on-existing', 'not-a-benchmark'],
      },
      confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
      proposed_name: { anyOf: [{ type: 'string' }, { type: 'null' }] },
      suggested_category: {
        anyOf: [{ type: 'string', enum: categoryIds }, { type: 'null' }],
      },
      matches_existing_entry: { anyOf: [{ type: 'string' }, { type: 'null' }] },
      rationale: { type: 'string' },
    },
  };
}

function buildSystemPrompt(catalog, categories) {
  const template = fs.readFileSync(PROMPT_PATH, 'utf8');
  const categoriesText = categories
    .map((c) => `- \`${c.id}\`: ${c.description}`)
    .join('\n');
  const catalogText = catalog
    .map((e) => (e.aliases.length ? `- ${e.name} (${e.aliases.join(', ')})` : `- ${e.name}`))
    .join('\n');
  return template
    .replace('{{CATEGORIES}}', categoriesText)
    .replace('{{CATALOG}}', catalogText);
}

function candidateMessage(paper) {
  return [
    `Title: ${paper.title}`,
    `Authors: ${paper.authors.join(', ')}`,
    `Published: ${paper.published}`,
    `arXiv categories: ${paper.categories.join(', ')}`,
    '',
    `Abstract: ${paper.abstract}`,
  ].join('\n');
}

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  });
  await Promise.all(workers);
  return results;
}

async function triageOne(client, cfg, systemPrompt, schema, paper) {
  const response = await client.messages.create({
    model: cfg.model,
    max_tokens: 8000,
    thinking: { type: 'adaptive' },
    system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: candidateMessage(paper) }],
    output_config: { format: { type: 'json_schema', schema } },
  });
  if (response.stop_reason === 'refusal') {
    return { error: 'model declined the request' };
  }
  if (response.stop_reason === 'max_tokens') {
    return { error: 'response hit max_tokens' };
  }
  const text = response.content.find((b) => b.type === 'text')?.text;
  if (!text) return { error: 'no text block in response' };
  try {
    return { result: JSON.parse(text) };
  } catch {
    return { error: `unparseable JSON: ${text.slice(0, 120)}` };
  }
}

// ---------------------------------------------------------------------------
// Report

function fmtCandidate(paper, triage) {
  const date = paper.published.slice(0, 10);
  const authors =
    paper.authors.length > 3
      ? `${paper.authors.slice(0, 3).join(', ')} et al.`
      : paper.authors.join(', ');
  const lines = [`- [ ] [${paper.title}](${paper.url}) (${date})`];
  const details = [`  ${authors.endsWith('.') ? authors : `${authors}.`}`];
  if (triage.verdict === 'new-benchmark') {
    details.push(
      `Proposed name: **${triage.proposed_name ?? 'unnamed'}**.`,
      `Suggested category: \`${triage.suggested_category ?? 'unclear'}\`.`,
      `Confidence: ${triage.confidence}.`,
    );
  } else if (triage.matches_existing_entry) {
    details.push(`Relates to **${triage.matches_existing_entry}**.`);
  }
  lines.push(details.join(' '), `  ${triage.rationale}`);
  return lines.join('\n');
}

function buildReport({ newBenchmarks, resultsOnExisting, stats }) {
  const sections = [
    'Automated weekly sweep of arXiv for new quantum benchmarks. Each item links the paper; if it belongs in the catalog, add an entry per CONTRIBUTING.md and check it off. Papers rejected here will not resurface in later runs.',
    '',
  ];
  if (newBenchmarks.length) {
    sections.push(`## New benchmark candidates (${newBenchmarks.length})`, '');
    for (const { paper, triage } of newBenchmarks) sections.push(fmtCandidate(paper, triage), '');
  }
  if (resultsOnExisting.length) {
    sections.push(`## Possible notable results on cataloged benchmarks (${resultsOnExisting.length})`, '');
    for (const { paper, triage } of resultsOnExisting) sections.push(fmtCandidate(paper, triage), '');
  }
  sections.push(
    '## Run stats',
    '',
    `Window: last ${stats.days} days. Harvested ${stats.harvested} papers, ` +
      `${stats.fresh} new after dedup, triaged ${stats.triaged} ` +
      `(${stats.rejected} rejected as not benchmarks, ${stats.failed} failed and will retry next run).` +
      (stats.dropped > 0
        ? ` Dropped ${stats.dropped} over the per run cap; rerun the workflow manually with a larger window to cover them.`
        : ''),
  );
  return sections.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
// Main

async function main() {
  const args = parseArgs(process.argv);
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  const days = args.days ?? config.arxiv.lookbackDays;
  const maxCandidates = args.max ?? config.triage.maxCandidatesPerRun;

  const catalog = loadCatalog();
  const knownArxivIds = new Set(catalog.flatMap((e) => [...e.arxivIds]));
  const seen = JSON.parse(fs.readFileSync(SEEN_PATH, 'utf8'));
  console.log(
    `catalog: ${catalog.length} entries, ${knownArxivIds.size} known arXiv ids; ` +
      `seen: ${Object.keys(seen.arxiv).length} previously triaged`,
  );

  console.log(`harvesting arXiv (last ${days} days)...`);
  const papers = await harvest(config.arxiv, days);
  const fresh = papers.filter((p) => !knownArxivIds.has(p.id) && !seen.arxiv[p.id]);
  const dropped = Math.max(0, fresh.length - maxCandidates);
  const candidates = fresh.slice(0, maxCandidates);
  console.log(
    `harvested ${papers.length}, ${fresh.length} new after dedup` +
      (dropped ? `, capped to ${maxCandidates}` : ''),
  );

  if (args.skipTriage) {
    for (const p of candidates) console.log(`  ${p.id}  ${p.published.slice(0, 10)}  ${p.title}`);
    console.log('(--skip-triage: no triage, no state written)');
    return;
  }

  const newBenchmarks = [];
  const resultsOnExisting = [];
  let rejected = 0;
  let failed = 0;

  if (candidates.length > 0) {
    const categoryIds = loadCategoryIds();
    const systemPrompt = buildSystemPrompt(catalog, loadCategoryDescriptions());
    const schema = triageSchema(categoryIds);
    const client = new Anthropic({ maxRetries: 3 });

    console.log(`triaging ${candidates.length} candidates with ${config.triage.model}...`);
    const outcomes = await mapLimit(candidates, config.triage.concurrency, async (paper) => {
      try {
        return await triageOne(client, config.triage, systemPrompt, schema, paper);
      } catch (err) {
        if (err instanceof Anthropic.AuthenticationError) throw err;
        return { error: err.message };
      }
    });

    for (let i = 0; i < candidates.length; i++) {
      const paper = candidates[i];
      const { result, error } = outcomes[i];
      if (error) {
        failed++;
        console.warn(`  triage failed for ${paper.id}: ${error}`);
        continue; // not recorded in seen.json, so the next run retries it
      }
      seen.arxiv[paper.id] = {
        triagedAt: new Date().toISOString().slice(0, 10),
        verdict: result.verdict,
        title: paper.title.slice(0, 100),
      };
      if (result.verdict === 'new-benchmark') newBenchmarks.push({ paper, triage: result });
      else if (result.verdict === 'results-on-existing')
        resultsOnExisting.push({ paper, triage: result });
      else rejected++;
    }

    seen.arxiv = Object.fromEntries(
      Object.entries(seen.arxiv).sort(([a], [b]) => a.localeCompare(b)),
    );
    fs.writeFileSync(SEEN_PATH, JSON.stringify(seen, null, 2) + '\n');
  }

  const stats = {
    days,
    harvested: papers.length,
    fresh: fresh.length,
    triaged: candidates.length - failed,
    rejected,
    failed,
    dropped,
  };
  console.log(
    `done: ${newBenchmarks.length} new benchmark candidates, ` +
      `${resultsOnExisting.length} results on existing, ${rejected} rejected, ${failed} failed`,
  );

  if (args.report && (newBenchmarks.length || resultsOnExisting.length)) {
    fs.writeFileSync(args.report, buildReport({ newBenchmarks, resultsOnExisting, stats }));
    console.log(`report written to ${args.report}`);
  }
}

main().catch((err) => {
  if (err instanceof Anthropic.AuthenticationError) {
    console.error(
      'error: Claude API authentication failed. Set ANTHROPIC_API_KEY ' +
        '(the ANTHROPIC_API_KEY repository secret in CI), or run `ant auth login` locally. ' +
        'Use --skip-triage to harvest without the API.',
    );
  } else {
    console.error(`error: ${err.message}`);
  }
  process.exit(1);
});
