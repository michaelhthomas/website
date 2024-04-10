import { defineConfig } from 'astro/config';

// integrations
import vue from '@astrojs/vue';
import unocss from 'unocss/astro';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';

// vite plugins
import unpluginIcons from 'unplugin-icons/vite';

// markdown
import remarkCodeTitles from 'remark-code-title';
import remarkDirective from 'remark-directive';
import remarkCalloutDirectives from '@microflash/remark-callout-directives';

// https://astro.build/config
export default defineConfig({
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
    })
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
    remarkPlugins: [remarkCodeTitles, remarkDirective, remarkCalloutDirectives]
  }
});
