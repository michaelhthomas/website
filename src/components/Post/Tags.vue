<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  tags: {
    type: Array,
    default() {
      return [];
    }
  },
  variant: {
    type: String,
    default() {
      return 'tag';
    }
  }
});
const { tags, variant } = toRefs(props);
</script>

<template>
  <div class="post-tags">
    <g-link
      v-for="tag in tags"
      :key="tag.id"
      :class="
        variant === 'post'
          ? 'text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-500 mr-2 rounded text-sm font-semibold uppercase tracking-wide transition-colors'
          : 'text-true-gray-600 dark:text-true-gray-300 bg-true-gray-400 dark:bg-true-gray-600 mr-1 rounded bg-opacity-25 px-2 py-1 text-sm font-semibold dark:bg-opacity-40'
      "
      :to="tag.path"
    >
      <span>#</span> {{ tag.title }}
    </g-link>
  </div>
</template>
