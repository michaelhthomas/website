<template>
  <div
    class="post-navigation-arrows text-true-gray-800 dark:text-true-gray-200 grid gap-2 sm:grid-cols-2"
  >
    <div>
      <g-link
        v-if="prevPost"
        :to="prevPost.node.path"
      >
        <div
          class="hover:bg-true-gray-200 dark:hover:bg-true-gray-800 group flex flex-row gap-4 rounded-md p-4 transition-colors"
        >
          <div class="flex flex-grow-0 flex-col justify-center">
            <Icon
              icon="mdi:arrow-left"
              class="h-10 w-10 transform transition-transform group-hover:-translate-x-1"
            />
          </div>
          <div class="flex-grow">
            <p class="font-bold">Previous</p>
            <p>{{ prevPost.node.title }}</p>
          </div>
        </div>
      </g-link>
    </div>
    <div>
      <g-link
        v-if="nextPost"
        :to="nextPost.node.path"
      >
        <div
          class="hover:bg-true-gray-200 dark:hover:bg-true-gray-800 group flex flex-row gap-4 rounded-md p-4 transition-colors"
        >
          <div class="flex-grow text-right">
            <p class="font-bold">Next</p>
            <p>{{ nextPost.node.title }}</p>
          </div>
          <div class="flex flex-grow-0 flex-col justify-center">
            <Icon
              icon="mdi:arrow-right"
              class="h-10 w-10 transform transition-transform group-hover:translate-x-1"
            />
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
  props: {
    postId: String
  },
  computed: {
    pageIndex() {
      // TODO: this is a bit of a hacky / inefficient way of doing this, so need to make sure this gets implemented *properly* when it gains upstream support
      // See https://github.com/gridsome/gridsome/issues/177
      return this.$static.posts.edges.findIndex(
        (el) => el.node.id === this.postId
      );
    },
    prevPost() {
      return this.$static.posts.edges[this.pageIndex - 1];
    },
    nextPost() {
      return this.$static.posts.edges[this.pageIndex + 1];
    }
  }
};
</script>
