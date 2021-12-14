<template>
  <div class="project-card md:flex mt-10">
    <div class="img max-w-lg md:max-w-sm mx-auto m-2 rounded-xl shadow-xl shadow-true-gray-500 dark:shadow-true-gray-800">
      <g-link :to="post.path">
        <g-image :alt="post.title" :src="post.cover_image" class="rounded-xl" />
      </g-link>
    </div>
    <div class="flex flex-col flex-grow justify-between max-w-lg mx-auto">
      <div class="txt md:px-5 lg:px-0">
        <g-link :to="post.path">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100">{{ post.title }}</h2>
        </g-link>
        <p class="font-semibold text-gray-600 dark:text-gray-300 text-sm">{{ post.date_published }}</p>
        <div class="flex flex-col justify-between max-w-lg mx-auto">
        </div>
        <BlogTags :tags="post.tags" />
        <p class="text-base text-gray-700 dark:text-gray-200 my-1">{{ post.description }}</p>
        <g-link
          :to="post.path"
          class="text-base font-semibold text-gray-700 dark:text-gray-200 my-3 hover:underline">
          Read more →
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('en', options)
    }
  },
}
</script>
