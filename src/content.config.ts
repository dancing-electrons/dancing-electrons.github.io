import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const publications = defineCollection({
  loader: file('src/data/publications.yml'),
  schema: z.object({
    date: z.coerce.string(),
    authors: z.array(z.string()),
    pi: z.number().int().nonnegative(),
    title: z.string(),
    journal: z.string().optional(),
    volume: z.union([z.string(), z.number()]).optional(),
    pages: z.union([z.string(), z.number()]).optional(),
    year: z.number().int(),
    arxiv: z.string().optional(),
    doi: z.string().optional(),
  }),
});

export const collections = { publications };
