<template>
  <Layout>
    <h1 class="tag-title title text-center"># {{ $page.tag.title }}</h1>

    <div class="posts wrapper-small">
      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    title
    belongsTo(sortBy: "date_published", order: DESC) {
      edges {
        node {
          ... on Post {
            title
            path
            date_published(format: "MMMM D, YYYY")
            timeToRead
            description
            cover_image
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `#${this.$page.tag.title}`,
      meta: [
        {
          name: 'description',
          content: this.$page.tag.description
        }
      ]
    };
  }
};
</script>
