<template>
  <Layout>
    <div class="text-gray-900 dark:text-gray-100">
      <div class="wrapper-small post-title my-10 text-center">
        <h1 class="text-3xl font-bold text-true-gray-800 dark:text-true-gray-200 post-title__text mb-4">
          {{ $page.post.title }}
        </h1>

        <PostMeta
          class="text-thin text-true-gray-600 dark:text-true-gray-400"
          :post="$page.post" 
        />

      </div>
      
      <div class="post content-box bg-white dark:bg-true-gray-800 shadow-lg shadow-true-gray-300 dark:shadow-true-gray-900 max-w-3xl pb-5 mx-0 sm:mx-5 md:mx-auto sm:rounded-lg">
        <div class="post__header">
          <g-image 
            alt="Cover image"
            class="sm:rounded-t-lg mx-auto"
            v-if="$page.post.cover_image"
            :src="$page.post.cover_image" 
          />
        </div>

        <div class="mx-10">
          <div class="post__content prose prose-lg text-gray-900 dark:text-gray-100 mx-auto my-10" v-html="$page.post.content" />
        </div>
        
        <div class="post__footer">
          <PostTags :post="$page.post" />
        </div>
      </div>

      <div class="max-w-screen-md mx-auto mt-10 px-5">
        <div class="post-comments">
          <Disqus shortname="michaelt" :pageConfig="{title: $page.post.title, identifier: $page.post.path}" />
        </div>

        <div class="my-10"></div>

        <AuthorSmall class="post-author" />
      </div>
    </div>
  </Layout>
</template>

<script>
import AuthorSmall from '~/components/Author/Small.vue';

export default {
  components: {
    AuthorSmall
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date_published (format: "MMMM D, YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>
