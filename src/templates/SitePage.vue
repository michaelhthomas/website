<template>
  <Layout>
    <h1 class="page-title text-center title">
      {{ $page.data.title }}
    </h1>

    <div class="page-content wrapper-small">
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<page-query>
query SitePage ($id: ID!) {
  data: sitePage(id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
   metaInfo () {
    return {
      title: this.$page.data.title,
      meta: [
        {
          name: 'description',
          content: this.$page.data.description
        }
      ]
    }
  }
}
</script>
