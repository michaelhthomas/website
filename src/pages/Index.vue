<script setup>
import LazyHydrate from 'vue-lazy-hydration';
</script>

<template>
  <Layout>
    <div class="wrapper-small">
      <LazyHydrate when-idle>
        <AuthorProfile />
      </LazyHydrate>

      <LazyHydrate when-visible>
        <section
          id="technologies"
          class="my-8"
        >
          <h2 class="section-heading">Technologies I Use</h2>

          <ResumeTechnologies />
        </section>
      </LazyHydrate>

      <LazyHydrate when-visible>
        <div class="section grid gap-10 md:grid-cols-2">
          <section id="experience">
            <h2 class="section-heading mb-4">Experience</h2>

            <ResumeExperience />
          </section>

          <section id="education">
            <h2 class="section-heading mb-4">Education</h2>

            <ResumeEducation />
          </section>
        </div>
      </LazyHydrate>

      <LazyHydrate when-visible>
        <section
          id="featured-posts"
          class="section"
        >
          <h2 class="section-heading">Featured Posts</h2>

          <PostCard
            v-for="post in $page.posts.edges"
            :key="post.node.slug"
            :post="post.node"
          />
        </section>
      </LazyHydrate>

      <LazyHydrate when-visible>
        <section
          id="projects"
          class="section"
        >
          <h2 class="section-heading">Open Source Projects</h2>

          <ResumeProjects />
        </section>
      </LazyHydrate>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(
    sortBy: "date_published"
    order: DESC
    filter: { featured: { eq: true } }
  ) {
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
    title: 'Hello, world!'
  }
};
</script>

<style>
.section {
  @apply my-8;
}
.section-heading {
  @apply text-true-gray-900 dark:text-true-gray-100 text-xl font-semibold;
}
</style>
