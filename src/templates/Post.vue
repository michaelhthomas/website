<template>
  <Layout>
    <div class="text-true-gray-900 dark:text-true-gray-100">
      <div class="wrapper-small post-title mb-10 text-center">
        <h1 class="text-3xl font-bold text-true-gray-800 dark:text-true-gray-200 post-title__text mb-4">
          {{ $page.post.title }}
        </h1>

        <PostMeta
          class="text-thin text-true-gray-600 dark:text-true-gray-400"
          :post="$page.post" 
        />

      </div>
      
      <div class="post content-box bg-white dark:bg-true-gray-800 shadow-lg shadow-true-gray-300 dark:shadow-true-gray-900 max-w-min pb-5 mx-0 sm:mx-5 md:mx-auto sm:rounded-lg">
        <!-- Share Menu -->
        <PostShare :title="$page.post.title" />

        <div class="post__header">
          <g-image 
            alt="Cover image"
            class="sm:rounded-t-lg mx-auto"
            v-if="$page.post.cover_image"
            :src="$page.post.cover_image" 
          />
        </div>

        <!-- Content -->
        <div class="p-5 sm:p-10">
          <div class="post__content prose prose-lg text-true-gray-900 dark:text-true-gray-100" v-html="$page.post.content" />
        </div>
        
        <div class="post__footer mx-10 my-5 text-center">
          <PostTags :tags="$page.post.tags" />
        </div>
      </div>

      <div class="max-w-screen-md mx-auto mt-8 px-5 md:px-0">
        <PostNavigationArrows :postId="$page.post.id" />

        <div class="my-8"></div>
      
        <AuthorSmall class="post-author" />

        <div class="mt-15"></div>

        <Disqus shortname="michaelt" :pageConfig="{title: $page.post.title, identifier: $page.post.path}" />
      </div>
    </div>

    <UiBackToTop />

  </Layout>
</template>

<script>
import AuthorSmall from '~/components/Author/Small.vue';
import PostShare from '../components/Post/Share.vue';
import PostNavigationArrows from '../components/Post/NavigationArrows.vue'

export default {
  components: {
    AuthorSmall,
    PostShare,
    PostNavigationArrows
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
    id
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
