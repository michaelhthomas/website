import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import unocss from 'unocss/astro';
import unpluginIcons from 'unplugin-icons/vite';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    unocss({
      injectReset: true
    }),
    icon(),
    mdx()
  ],
  vite: {
    plugins: [
      unpluginIcons({
        compiler: 'vue3'
      })
    ]
  }
});
