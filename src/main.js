// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

import '@purge-icons/generated'

import VueDisqus from 'vue-disqus'

// Import global styles
import '~/assets/styles/root.scss'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) { // eslint-disable-line
  Vue.use(VueDisqus)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}