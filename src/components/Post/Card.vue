<script setup>
const props = defineProps({
  post: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div class="md:flex my-8">
    <div class="img max-w-lg md:max-w-sm mx-auto m-2 rounded-xl shadow">
      <g-link :to="post.path">
        <g-image :alt="post.title" :src="post.cover_image" class="rounded-xl" />
      </g-link>
    </div>
    <div class="flex-grow justify-between max-w-lg mx-auto md:px-5 lg:px-0">
      <div class="meta">
        <g-link :to="post.path">
          <h2 class="text-xl font-semibold text-true-gray-800 dark:text-true-gray-100">{{ post.title }}</h2>
        </g-link>
        <p class="font-semibold text-true-gray-600 dark:text-true-gray-400 text-md">{{ post.date_published }}</p>
      </div>
      
      <PostTags class="my-2" :tags="post.tags" />

      <g-link :to="post.path">
        <p class="text-base text-true-gray-600 dark:text-true-gray-400">{{ post.description }}</p>

        <p class="text-base font-semibold text-primary-800 dark:text-primary-200 block my-1 group">
          <span class="link-underline before:bg-primary-800 dark:before:bg-primary-200">
            Read more
          </span>
          <Icon class="transform group-hover:translate-x-1 transition-transform" inline icon="icon-park-outline:arrow-right" />
        </p>
      </g-link>
    </div>
  </div>
</template>

<style>
.link-underline {
  position: relative;
}

.link-underline::before {
  content: "";
  position: absolute;
  display: block;
  width: calc(100% - 5px);
  height: 2px;
  bottom: -2px;
  left: 0;
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform 0.3s ease;
}

.group:hover .link-underline::before {
  transform: scaleX(1);
}
</style>
