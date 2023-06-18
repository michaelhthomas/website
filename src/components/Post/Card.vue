<script setup>
import PostTags from '~/components/Post/Tags.vue';

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
  <div class="my-8 md:flex">
    <div
      v-if="post.cover_image"
      class="img m-2 mx-auto max-w-lg rounded-xl shadow md:max-w-sm"
    >
      <g-link :to="post.path">
        <g-image
          :alt="post.title"
          :src="post.cover_image"
          class="rounded-xl"
        />
      </g-link>
    </div>
    <div class="mx-auto max-w-lg flex-grow justify-between md:px-5 lg:px-0">
      <div class="meta">
        <g-link :to="post.path">
          <h2
            class="text-true-gray-800 dark:text-true-gray-100 text-xl font-semibold"
          >
            {{ post.title }}
          </h2>
        </g-link>
        <p
          class="text-true-gray-600 dark:text-true-gray-400 text-md font-semibold"
        >
          {{ post.date_published }}
        </p>
      </div>

      <PostTags
        class="my-2"
        :tags="post.tags"
      />

      <g-link :to="post.path">
        <p class="text-true-gray-600 dark:text-true-gray-400 text-base">
          {{ post.description }}
        </p>

        <p
          class="text-primary-800 dark:text-primary-200 group my-1 block text-base font-semibold"
        >
          <span
            class="link-underline before:bg-primary-800 dark:before:bg-primary-200"
          >
            Read more
          </span>
          <Icon
            class="transform transition-transform group-hover:translate-x-1"
            inline
            icon="icon-park-outline:arrow-right"
          />
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
  content: '';
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
