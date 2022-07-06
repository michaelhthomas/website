<script setup>
import AuthorSmall from '~/components/Author/Small.vue';
import PostShare from '~/components/Post/Share.vue';
import PostNavigationArrows from '~/components/Post/NavigationArrows.vue';
import Giscus from '~/components/Giscus.vue';
import PostTags from '~/components/Post/Tags.vue';
</script>

<template>
  <Layout>
    <div class="post-wrapper text-true-gray-900 dark:text-true-gray-100">
      <div class="post-title">
        <PostTags :tags="$page.post.tags" variant="post" />

        <h1 class="text-3xl md:text-5xl font-bold text-true-gray-800 dark:text-true-gray-200 post-title__text mt-2 mb-4">
          {{ $page.post.title }}
        </h1>

        <PostMeta
          class="text-thin text-sm md:text-base text-true-gray-600 dark:text-true-gray-400"
          :post="$page.post" 
        />

      </div>

      <div class="post__header post-object-wide">
        <g-image 
          alt="Cover image"
          class="rounded-lg mx-auto shadow-lg"
          v-if="$page.post.cover_image"
          :src="$page.post.cover_image" 
        />
      </div>

      <!-- Content -->
      <div class="post">
        <!-- Share Menu -->
        <PostShare :title="$page.post.title" class="share" />
        <div 
          class="post__content prose prose-lg md:prose-xl w-prose max-w-full text-true-gray-900 dark:text-true-gray-100"
          v-html="$page.post.content" 
        />
      </div>

      <PostNavigationArrows :postId="$page.post.id" />
    
      <AuthorSmall class="post-author" />
      
      <Giscus />
    </div>

    <UiBackToTop />
  </Layout>
</template>

<script>
export default {
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

<style lang="scss">
.post-wrapper {
  display: grid;
  grid-template-columns: [full-start] minmax(4vmin,auto) [wide-start] minmax(auto,240px) [main-start] min(720px,calc(100% - 8vw)) [main-end] minmax(auto,240px) [wide-end] minmax(4vmin,auto) [full-end];
  row-gap: 2rem;
}

.post-wrapper > * {
  grid-column: main-start/main-end;
}

.post-object-wide {
  grid-column: wide-start/wide-end;
}

.share {
  // grid-column: full-start/main-start;
  // margin-left: auto;
  // margin-right: 2rem;
  height: min-content;
  width: min-content;
}
</style>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    id
    title
    path
    date_published (format: "MMMM D, YYYY")
    date_updated (format: "MMMM D, YYYY")
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
