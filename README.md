# Quantum Benchmark Zoo

A community-maintained catalog of quantum computing benchmarks at
[quantumbenchmarkzoo.com](https://quantumbenchmarkzoo.com): what each protocol measures, how it
works, key papers, reference implementations, and notable results.

Built as a fully static site — benchmark entries are Markdown files with schema-validated
frontmatter, so contributions are pull requests and a malformed entry fails the build instead of
shipping.

## Stack

- [Astro](https://astro.build) (v7) with [content collections](https://docs.astro.build/en/guides/content-collections/) — each benchmark is one Markdown file in `src/content/benchmarks/`, validated against the Zod schema in `src/content.config.ts` at build time.
- [Pagefind](https://pagefind.app) — fully static full-text search, indexed at build time (`pnpm build` runs `astro build && pagefind --site dist`).
- [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/) for hosting (configured in `wrangler.jsonc`); no server, no database.
- No client-side framework: pages are plain HTML/CSS with a small inline script for filtering.

## Development

Requires Node >= 22.12 and pnpm 10 (pinned in `mise.toml` for [mise](https://mise.jdx.dev) users).

```sh
pnpm install
pnpm dev        # dev server at localhost:4321
pnpm build      # build to dist/ and generate the search index
pnpm preview    # serve the production build locally
```

Note: the `/search/` page needs the Pagefind index, which only exists after a build — use
`pnpm build && pnpm preview` to test search. Everything else works under `pnpm dev`.

## Adding a benchmark

Create `src/content/benchmarks/<slug>.md` (the filename becomes the URL). See
[CONTRIBUTING.md](CONTRIBUTING.md) for the field reference and style guide. Minimal shape:

```yaml
---
name: My Benchmark
tagline: One sentence saying what it does and why it matters.
category: system-level # or component-level | application-level
measures: The figure of merit, in one line
introducedBy:
  - Some Organization
yearIntroduced: 2024
papers:
  - title: The primary reference
    authors: Author, Author & Author
    year: 2024
    url: https://arxiv.org/abs/...
---

Body text in Markdown: how it works, strengths and limitations, notable results.
```

`pnpm build` validates every entry; CI runs the same build on pull requests.

## Deploying

The site deploys to Cloudflare Workers as static assets (free tier, unlimited static requests).

**One-time setup:**

1. Create a [Cloudflare](https://dash.cloudflare.com) account and add the
   `quantumbenchmarkzoo.com` zone (point the domain's nameservers at Cloudflare).
2. Deploy from your machine:

   ```sh
   pnpm build
   pnpm dlx wrangler@latest login
   pnpm dlx wrangler@latest deploy
   ```

3. Attach the custom domain: Cloudflare dashboard → Workers & Pages →
   `quantumbenchmarkzoo` → Settings → Domains & Routes → add
   `quantumbenchmarkzoo.com` (and `www` if you want it).

**Continuous deploys:** connect the GitHub repository under Workers & Pages → your Worker →
Settings → Build, and every push to `main` builds (`pnpm build`) and deploys automatically.
Cloudflare Pages would also work for this site, but Cloudflare recommends Workers for new
projects.

## Related projects

- [Metriq](https://metriq.info/) — community-submitted quantum benchmark *results* over time.
- [Error Correction Zoo](https://errorcorrectionzoo.org/) and
  [Quantum Algorithm Zoo](https://quantumalgorithmzoo.org/) — the genre's namesakes.
