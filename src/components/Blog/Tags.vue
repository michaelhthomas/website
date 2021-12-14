<template>
 <div class="post-tags">
    <g-link
      v-for="tag of tags"
      :key="tag.id"
      :to="tag.path"
      class="font-semibold text-gray-600 bg-opacity-25 dark:bg-opacity-40 dark:text-gray-300 text-sm rounded bg-gray-200 dark:bg-primary mr-1 px-1"
    >
      #{{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default() {return []}
    },
  },
}
</script>
