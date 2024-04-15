---
title: Supercharge your Static Site or Blog with Gridsome
slug: supercharge-your-static-site-or-blog-with-gridsome
type: post
cover_image: ./cover.png
date_published: 2022-05-24
date_updated: 2022-05-24
tags: ['Gridsome', 'Web Development']
description: Make your static site or blog work for you with the Gridsome static site generator.
featured: true
---

[Gridsome](https://gridsome.org/) is the static site generator made for Vue developers. Similar to [Gatsby](https://www.gatsbyjs.com/), its equivalent in the React world, it uses the GraphQL query language to make it easy to turn simple, data-driven layouts into a full, content-rich website. Gridsome lets you to focus on building fast, beautiful websites without having to worry about the challenges of aggregating content from markdown files, CMS applications, etc.

# Getting Started

If you're a Vue developer and considering developing your own personal Markdown-based blog or even an advanced, CMS-driven commercial website, Gridsome is a powerful tool. To get started, install the Gridsome CLI and use it to create a new project.

```bash
# install gridsome cli
yarn global add @gridsome/cli
# create new project
gridsome create my-gridsome-site
# open project directory
cd my-gridsome-site/
# start local development server
gridsome develop
```

## Directory structure

Open your new project in the editor of your choice, and you'll see a directory structure similar to the one below.

```
.
├── package.json
├── gridsome.config.js
├── gridsome.server.js
├── static/
└── src/
    ├── main.js
    ├── index.html
    ├── App.vue
    ├── layouts/
    │   └── Default.vue
    ├── pages/
    │   ├── Index.vue
    │   └── Blog.vue
    └── templates/
        └── BlogPost.vue
```

This directory structure builds heavily on the default `vue-cli` application structure, but adds a few new concepts specific to developing a statically generated website.

### `gridsome.config.js`

This file contains configuration and options for installed plugins, including content sources. Open it up and familiarize yourself the default plugin configuration.

### `/src/layouts`

Components in this directory are the base that can be used to build all your pages or templates.

### `/src/pages`

Components in this directory are static, Vue-based pages. They can extend from layouts.

### `/src/templates`

This folder is where all the magic happens. If you are importing an external data source, like posts from a WordPress blog, into your project then the components in this directory will act as templates, automatically generating routes and pages for each post. The name of the component file must match the node type in your GraphQL schema.

These are just a few of the most important directories in the Gridsome starter project. If you'd like to explore further, take a look at the [Gridsome documentation](https://gridsome.org/docs/directory-structure/).

## Using GraphQL Queries

Here's an example of a simple page template:

```html title="/src/templates/SitePage.vue"
<template>
  <Layout>
    <h1 class="page-title text-center title">
      {{ $page.data.title }}
    </h1>

    <div class="page-content wrapper-small">
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<page-query>
query SitePage ($id: ID!) {
  data: sitePage(id: $id) {
    title
    content
  }
}
</page-query>

<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.data.title,
        meta: [
          {
            name: 'description',
            content: this.$page.data.description
          }
        ]
      };
    }
  };
</script>
```

Pay special attention to the `<page-query>` block in this template. This section of the component is a GraphQL query which obtains the title and markdown content of the current page automatically.

While in this particular example, the use of a GraphQL intermediary layer in the build may seem a little unnecessary, the value and simplicity it provides cannot be understated. Take another example, which loads a list of blog posts and their metadata.

```graphql
query ($page: Int) {
  posts: allPost(
    sortBy: "date_published"
    order: DESC
    perPage: 10
    page: $page
  ) @paginate {
    edges {
      node {
        id
        title
        date_published(format: "MMMM D, YYYY")
        timeToRead
        description
        cover_image(width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
```

This query not only loads the data from multiple posts at a time, it processes cover images by generating thumbnails, converts the date published into a standardized, human readable format, and automatically paginates the blog posts so that there are no more than 10 per page. Gridsome's GraphQL data layer makes all of these tasks take just a few lines in a query, rather than the hours of effort it would take to implement them by hand.

# Conclusion

As static site generators gain popularity, you must be able to understand building with SSGs like Gridsome to deliver content to your users by comfortably building static websites.

This article is just a brief introduction to what Gridsome is capable of. Check out the [official Gridsome documentation](https://gridsome.org/docs/) to learn more.
