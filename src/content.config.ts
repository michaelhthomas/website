import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date_published: z.date(),
      date_updated: z.date().optional(),
      cover_image: image().optional(),
      cover_image_caption: z.string().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false)
    })
});

const pageCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date_published: z.date(),
    date_updated: z.date()
  })
});

export const collections = {
  posts: blogCollection,
  pages: pageCollection
};
