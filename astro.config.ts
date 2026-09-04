import { defineConfig } from 'astro/config';

// integrations
import vue from '@astrojs/vue';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// vite plugins
import tailwindcss from '@tailwindcss/vite';
import unpluginIcons from 'unplugin-icons/vite';

// markdown
import remarkCodeTitles from 'remark-code-title';
import remarkDirective from 'remark-directive';
import remarkCalloutDirectives from '@microflash/remark-callout-directives';
import remarkSmartypants from 'remark-smartypants';
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  site: 'https://michaelt.xyz',
  integrations: [
    vue(),
    icon(),
    mdx(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }),
    sitemap()
  ],
  vite: {
    plugins: [
      tailwindcss(),
      unpluginIcons({
        compiler: 'vue3'
      })
    ]
  },
  markdown: {
    shikiConfig: {
      theme: 'material-theme-darker'
    },
    processor: unified({
      remarkPlugins: [
        [remarkSmartypants, { dashes: 'oldschool' }],
        remarkCodeTitles,
        remarkDirective,
        remarkCalloutDirectives
      ]
    })
  },
  redirects: {
    // improper url from gridsome site
    '/blog/nix-os-configuration-notes': '/blog/nixos-configuration-notes/'
  }
});
