import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const benchmarks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/benchmarks' }),
  schema: z.object({
    /** Display name, e.g. "Quantum Volume". */
    name: z.string().min(1),
    /** One-sentence summary shown in cards and meta descriptions. */
    tagline: z.string().min(1).max(220),
    /** Where the benchmark sits in the stack. */
    category: z.enum(['component-level', 'system-level', 'application-level']),
    /** The figure of merit, in one line. */
    measures: z.string().min(1),
    /** People/organizations who introduced it. */
    introducedBy: z.array(z.string()).nonempty(),
    yearIntroduced: z.number().int().min(1980).max(2100),
    aliases: z.array(z.string()).default([]),
    /** "active" unless the benchmark is of purely historical interest. */
    status: z.enum(['active', 'historical']).default('active'),
    /** Primary literature. At least one required. */
    papers: z
      .array(
        z.object({
          title: z.string(),
          authors: z.string(),
          year: z.number().int(),
          url: z.url(),
        }),
      )
      .nonempty(),
    /** Reference implementations and tooling. */
    code: z.array(z.object({ name: z.string(), url: z.url() })).default([]),
    /** Ids of related entries in this collection (validated at build time). */
    related: z.array(reference('benchmarks')).default([]),
  }),
});

export const collections = { benchmarks };
