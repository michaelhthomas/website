// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

import '@purge-icons/generated'

// Import global styles
import '~/assets/styles/root.scss'

import 'prismjs/plugins/command-line/prism-command-line.css'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) { // eslint-disable-line
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Ignore giscus web component
  Vue.config.ignoredElements = [
    'giscus-widget'
  ]
}