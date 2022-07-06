<script setup>
import Icon from "../Icon.vue";

const props = defineProps({
  postId: String
})

</script>

<template>
  <div class="post-navigation-arrows grid sm:grid-cols-2 gap-2 text-true-gray-800 dark:text-true-gray-200">
    <div>
      <g-link :to="prevPost.node.path" v-if="prevPost">
        <div class="flex flex-row gap-4 group p-4 rounded-md hover:bg-true-gray-200 dark:hover:bg-true-gray-800 transition-colors">
          <div class="flex flex-col justify-center flex-grow-0">
            <Icon icon="mdi:arrow-left" class="h-10 w-10 transform group-hover:-translate-x-1 transition-transform" />
          </div>
          <div class="flex-grow">
            <p class="font-bold">Previous</p>
            <p>{{ prevPost.node.title }}</p>
          </div>
        </div>
      </g-link>
    </div>
    <div>
      <g-link :to="nextPost.node.path" v-if="nextPost">
        <div class="flex flex-row gap-4 group p-4 rounded-md hover:bg-true-gray-200 dark:hover:bg-true-gray-800 transition-colors">
          <div class="flex-grow text-right">
            <p class="font-bold">Next</p>
            <p>{{ nextPost.node.title }}</p>
          </div>
          <div class="flex flex-col justify-center flex-grow-0">
            <Icon icon="mdi:arrow-right" class="h-10 w-10 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </g-link>
    </div>
  </div>
</template>

<static-query>
query {
  posts: allPost(sortBy: "date_published", order: ASC) {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>

<script>

export default {
  computed: {
    pageIndex() {
      // TODO: this is a bit of a hacky / inefficient way of doing this, so need to make sure this gets implemented *properly* when it gains upstream support
      // See https://github.com/gridsome/gridsome/issues/177
      return this.$static.posts.edges.findIndex(el => el.node.id === this.postId);
    },
    prevPost() {
      return this.$static.posts.edges[this.pageIndex - 1];
    },
    nextPost() {
      return this.$static.posts.edges[this.pageIndex + 1];
    }
  }
}
</script>