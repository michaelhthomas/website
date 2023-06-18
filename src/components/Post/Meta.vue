<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    default: null
  }
});
const { post } = toRefs(props);
</script>

<template>
  <div class="post-meta">
    Posted {{ post.date_published }}
    <template v-if="post.timeToRead">
      <span class="text-true-gray-500 px-1">•</span>
      {{ post.timeToRead }} min read
    </template>
    <template v-if="post.date_updated">
      <span class="text-true-gray-500 px-1">•</span>
      Updated {{ post.date_updated }}
    </template>
  </div>
</template>
