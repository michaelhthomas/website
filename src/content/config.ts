import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
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
  type: 'content',
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
