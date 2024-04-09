import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import unocss from 'unocss/astro';
import unpluginIcons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    unocss({
      injectReset: true
    })
  ],
  vite: {
    plugins: [
      unpluginIcons({
        compiler: 'vue3'
      })
    ]
  }
});
