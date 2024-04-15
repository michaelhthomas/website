import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  if (!context.site) throw new Error('[rss]: site url not configured.');

  const blog = await getCollection('posts');

  return rss({
    // `<title>` field in output xml
    title: "Michael Thomas's Blog",
    // `<description>` field in output xml
    description:
      'Thoughts about software development, open-source, and politics.',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date_published,
      description: post.data.description,
      link: `/blog/${post.slug}/`
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss/styles.xsl'
  });
}
