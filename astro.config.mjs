// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://quantumbenchmarkzoo.com',
  integrations: [sitemap()],
  // Compression strips newline whitespace between text and inline tags,
  // gluing words to links ("pull request onGitHub").
  compressHTML: false,
});
