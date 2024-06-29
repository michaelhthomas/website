<template>
  <a
    :href="!isInternalPage && utm ? utmLink : href"
    :target="blank ? '_blank' : undefined"
    :title="title"
    :rel="relStr"
    class="link"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MLink',
  props: {
    href: {
      required: true,
      default: ''
    },
    blank: {
      type: Boolean,
      required: false,
      default: false
    },
    external: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    utm: {
      type: Boolean,
      required: false,
      default: true
    },
    rel: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    }
  },
  computed: {
    /**
     * Checks if the href leads to an internal page and returns boolean.
     */
    isInternalPage(): boolean {
      if (this.external) return false;
      const href = this.href;
      if (typeof href === 'object') return true;
      else if (typeof href === 'string' && ['/', '#'].includes(href[0]))
        return true;
      else return false;
    },
    /**
     * Adds UTM query parameter to URL and returns it.
     */
    utmLink(): string {
      try {
        const url = new URL(this.href);
        url.searchParams.append('utm_source', 'michaelt.xyz');
        return url.href;
      } catch (err) {
        return this.href;
      }
    },
    relStr() {
      const rel = this.rel;

      if (!this.isInternalPage) rel.push('noreferrer', 'noopener');

      return rel.join(' ');
    }
  }
});
</script>

<style>
.underline {
  @apply bg-gradient-from-primary-300 bg-gradient-to-primary-300 dark:bg-gradient-from-primary-700 dark:bg-gradient-to-primary-700 bg-gradient-to-r;
  text-decoration: none;

  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 100%;
  transition: all 200ms;
}

.underline:hover {
  background-size: 100% 100%;
}
</style>
