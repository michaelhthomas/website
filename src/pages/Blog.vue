<script setup>
import PostCard from '~/components/Post/Card.vue';
</script>

<template>
  <Layout>
    <div class="title flex items-center justify-center">
      <h2 class="text-center">Blog</h2>
    </div>

    <div class="wrapper-small my-5">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(sortBy: "date_published", order: DESC) {
    edges {
      node {
        id
        title
        date_published(format: "MMMM D, YYYY")
        timeToRead
        description
        cover_image(width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
};
</script>
