import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import unocss from 'unocss/astro';
import unpluginIcons from 'unplugin-icons/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    unocss({
      injectReset: true
    }),
    icon()
  ],
  vite: {
    plugins: [
      unpluginIcons({
        compiler: 'vue3'
      })
    ]
  }
});
