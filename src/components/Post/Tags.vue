<script setup>
const props = defineProps({
  tags: {
    type: Array,
    default() {return []}
  },
  variant: {
    type: String,
    default() {return "tag"}
  }
})
</script>

<template>
   <div class="post-tags">
   		<g-link 
       :class="
          (variant === 'post') 
            ? 'font-semibold tracking-wide text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-500 transition-colors text-sm uppercase rounded mr-2'
            : 'font-semibold text-true-gray-600 dark:text-true-gray-300 bg-opacity-25 dark:bg-opacity-40 text-sm rounded bg-true-gray-400 dark:bg-true-gray-600 mr-1 px-2 py-1'
          "
       v-for="tag in tags"
       :key="tag.id"
       :to="tag.path"
      >
   			<span>#</span> {{ tag.title }}
   		</g-link>
    </div>
</template>
