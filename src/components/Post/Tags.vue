<template>
   <div class="post-tags">
   		<g-link 
       class="font-semibold text-true-gray-600 dark:text-true-gray-300 bg-opacity-25 dark:bg-opacity-40 text-sm rounded bg-true-gray-400 dark:bg-true-gray-600 mr-1 px-2 py-1"
       v-for="tag in tags"
       :key="tag.id"
       :to="tag.path"
      >
   			<span>#</span> {{ tag.title }}
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
