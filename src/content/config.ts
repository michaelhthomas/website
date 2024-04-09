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

type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;

export type BlogPost = z.infer<
  ReturnTypeOrOriginal<
    ReturnTypeOrOriginal<Required<typeof blogCollection>>['schema']
  >
>;

export const collections = {
  posts: blogCollection
};
