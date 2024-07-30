import { defineConfig } from 'astro/config';

// integrations
import vue from '@astrojs/vue';
import unocss from 'unocss/astro';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// vite plugins
import unpluginIcons from 'unplugin-icons/vite';

// markdown
import remarkCodeTitles from 'remark-code-title';
import remarkDirective from 'remark-directive';
import remarkCalloutDirectives from '@microflash/remark-callout-directives';
import remarkSmartypants from 'remark-smartypants';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://michaelt.xyz',
  integrations: [
    vue(),
    unocss({
      injectReset: true
    }),
    icon(),
    mdx(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }),
    sitemap(),
    svelte()
  ],
  vite: {
    plugins: [
      unpluginIcons({
        compiler: 'vue3'
      })
    ]
  },
  markdown: {
    shikiConfig: {
      theme: 'material-theme-darker'
    },
    remarkPlugins: [
      [
        remarkSmartypants,
        {
          dashes: 'oldschool'
        }
      ],
      remarkCodeTitles,
      remarkDirective,
      remarkCalloutDirectives
    ]
  },
  redirects: {
    // improper url from gridsome site
    '/blog/nix-os-configuration-notes': '/blog/nixos-configuration-notes/'
  }
});
