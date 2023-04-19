// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';

import '@purge-icons/generated';

// Import global styles
import '@unocss/reset/tailwind.css';
import '~/assets/styles/root.scss';

import 'prismjs/plugins/command-line/prism-command-line.css';
import { ClientApiConstructor } from './types';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
const client: ClientApiConstructor = function (Vue) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  // Ignore giscus web component
  Vue.config.ignoredElements = ['giscus-widget'];
};

export default client;
