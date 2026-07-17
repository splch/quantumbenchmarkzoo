# Agent notes

## Project shape

- Astro 7 static site. Benchmark entries live in `src/content/benchmarks/*.md`; the filename is
  the URL slug. The Zod schema in `src/content.config.ts` validates frontmatter at build time —
  see CONTRIBUTING.md for the field reference and style guide.
- Categories are the enum in `src/lib/categories.ts` and the schema; keep the two in sync if
  adding one.
- `pnpm build` runs `astro build && pagefind --site dist`. The `/search/` page only works
  against a built site (`pnpm build && pnpm preview`); everything else works under `pnpm dev`.
- Styling is plain CSS in `src/styles/global.css` (design tokens at the top, light/dark via
  `prefers-color-scheme`). Keep text contrast >= 4.5:1 on every surface in both themes.
- No client framework. The only scripts are the inline filter on the index page and Pagefind UI
  on `/search/`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles](https://docs.astro.build/en/guides/styling/)
