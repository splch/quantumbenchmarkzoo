# Contributing

Benchmark entries are Markdown files in `src/content/benchmarks/`. The filename (minus `.md`)
becomes the URL slug: `quantum-volume.md` → `/benchmarks/quantum-volume/`.

## Adding or editing an entry

1. Copy an existing entry as a starting point.
2. Fill in the frontmatter (field reference below) and body.
3. Run `pnpm build`: the schema in `src/content.config.ts` validates every entry, and the build
   fails with a pointed error if something is missing or malformed.
4. Open a pull request. CI runs the same build.

## Frontmatter fields

| Field            | Required | Notes                                                                 |
| ---------------- | -------- | --------------------------------------------------------------------- |
| `name`           | yes      | Display name, e.g. `Quantum Volume`.                                  |
| `tagline`        | yes      | One sentence (max 220 chars); shown on cards and in search results.   |
| `category`       | yes      | One of the ids in `src/lib/categories.ts`: `component-level`, `system-level`, `application-level`, `error-correction`, `software-stack`, `platform-specific`, `characterization`. |
| `measures`       | yes      | The figure of merit, in one line.                                     |
| `introducedBy`   | yes      | List of people/organizations.                                         |
| `yearIntroduced` | yes      | Year of the first paper or announcement.                              |
| `papers`         | yes      | At least one: `title`, `authors`, `year`, `url` (prefer arXiv/DOI).   |
| `aliases`        | no       | Alternative names/acronyms; used by the on-page filter.               |
| `code`           | no       | Reference implementations: `name`, `url`.                             |
| `related`        | no       | Slugs of related entries; validated against the collection at build.  |
| `status`         | no       | `active` (default), `proposal` (paper-only so far), `superseded` (named successor exists), or `historical`. |

## Body structure

Use these sections where they apply, in this order:

```markdown
Opening paragraph: what it is and why it matters, no heading.

## How it works
## Strengths and limitations
## Notable results
```

## Style

- Neutral, cite-your-sources tone: claims about what a benchmark shows, or where it falls
  short, should link to the literature.
- Front-load: the first sentence of the entry and of each section should carry the point.
- Prefer primary sources (arXiv, journals, official docs) over press coverage; use press links
  only for records/announcements with no better source.
- Plain-text math (e.g. `F = 2^n · ⟨p(x)⟩ − 1`); the site does not render LaTeX.
- Go easy on dashes: at most one per entry (the site keeps them under 0.25% of words). Prefer
  commas, colons, parentheses, or a new sentence.
