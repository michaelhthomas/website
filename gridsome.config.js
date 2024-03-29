// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Michael Thomas',
  siteDescription:
    'A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.',
  siteUrl: 'https://michaelt.xyz',

  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'SitePage',
        path: 'content/pages/*.md'
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'SitePage',
        baseDir: './content/pages',
        route: '/:slug',
        template: './src/templates/SitePage.vue'
      }
    },
    {
      use: 'gridsome-plugin-partytown',
      options: {
        debug: false,
        lib: 'partytown-lib',
        forward: ['dataLayer.push']
      }
    },
    {
      // Create RSS Feed
      use: '@microflash/gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        htmlFields: ['content'],
        feedOptions: {
          title: "Michael Thomas's Blog",
          description: "Michael's stream of consciousness"
        },
        atom: {
          enabled: true
        },
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date_published,
          description: node.description
        })
      }
    },
    {
      use: 'gridsome-plugin-typescript'
    }
  ],

  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        [
          'gridsome-plugin-remark-prismjs-all',
          {
            noInlineHighlight: true,
            prompt: {
              user: `michael`,
              host: `pc`,
              global: true
            }
          }
        ],
        'remark-admonitions',
        ['@silvenon/remark-smartypants', { dashes: 'oldschool' }]
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('@unocss/postcss')({
            content: [
              './src/**/*.{html,js,ts,jsx,tsx,vue}',
              './content/**/*.md'
            ]
          })
        ]
      }
    }
  }
};
