<script setup>
import AuthorSmall from '~/components/Author/Small.vue';
import PostShare from '~/components/Post/Share.vue';
import PostNavigationArrows from '~/components/Post/NavigationArrows.vue';
import Giscus from '~/components/Giscus.vue';
import PostTags from '~/components/Post/Tags.vue';
import PostMeta from '~/components/Post/Meta.vue';
import BackToTop from '~/components/Ui/BackToTop.vue';
</script>

<template>
  <Layout>
    <div class="post-wrapper text-true-gray-900 dark:text-true-gray-100">
      <div class="post-title">
        <PostTags
          :tags="$page.post.tags"
          variant="post"
        />

        <h1
          class="text-true-gray-800 dark:text-true-gray-200 post-title__text mb-4 mt-2 text-3xl font-bold md:text-5xl"
        >
          {{ $page.post.title }}
        </h1>

        <PostMeta
          class="text-thin text-true-gray-600 dark:text-true-gray-400 text-sm md:text-base"
          :post="$page.post"
        />
      </div>

      <div class="post__header post-object-wide">
        <figure
          v-if="$page.post.cover_image"
          class="mx-auto w-fit"
        >
          <g-image
            alt="Cover image"
            class="shadow-opacity-10 rounded-lg shadow-lg shadow-black"
            :src="$page.post.cover_image"
          />
          <figcaption
            v-if="$page.post.cover_image_caption"
            class="prose text-trueGray-600 dark:text-trueGray-400 mt-2 text-sm"
            v-html="$page.post.cover_image_caption"
          />
        </figure>
      </div>

      <!-- Content -->
      <div class="post">
        <!-- Share Menu -->
        <PostShare
          :title="$page.post.title"
          class="share"
        />
        <div
          class="post__content prose dark:prose-invert w-prose text-true-gray-900 dark:text-true-gray-100 max-w-full text-lg md:text-xl"
          v-html="$page.post.content"
        />
      </div>

      <PostNavigationArrows :post-id="$page.post.id" />

      <AuthorSmall class="post-author" />

      <Giscus />
    </div>

    <BackToTop />
  </Layout>
</template>

<page-query lang="graphql">
query Post($id: ID!) {
  post: post(id: $id) {
    id
    title
    path
    date_published(format: "MMMM D, YYYY")
    date_updated(format: "MMMM D, YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image(width: 860, blur: 10)
    cover_image_caption
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.post-wrapper {
  display: grid;
  grid-template-columns:
    [full-start] minmax(4vmin, auto) [wide-start] minmax(auto, 240px)
    [main-start] min(720px, calc(100% - 8vw)) [main-end] minmax(auto, 240px) [wide-end] minmax(
      4vmin,
      auto
    )
    [full-end];
  row-gap: 2rem;
}

.post__content :first-child {
  margin-top: 0;
}

.post__content {
  h1 {
    margin-top: 2.5rem;
    margin-bottom: 0;
    font-size: 2rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  figure {
    p {
      margin: 0;
    }

    img {
      @apply shadow-opacity-10 mb-0 rounded-lg shadow-lg shadow-black;
    }

    &.crop {
      img {
        object-fit: cover;
      }

      &-16_9 img {
        aspect-ratio: 16 / 9;
      }

      &-4_3 img {
        aspect-ratio: 4 / 3;
      }
    }

    figcaption {
      @apply text-trueGray-600 dark:text-trueGray-400 mt-2 text-sm;
    }
  }

  @screen md {
    h1 {
      margin-top: 3rem;
      margin-bottom: 0;
      font-size: 2.5rem;
    }

    h2 {
      margin-top: 3rem;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }
  }
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
