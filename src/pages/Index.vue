<template>
  <Layout :show-logo="false">

    <div class="wrapper-small md:px-10">
      <AuthorProfile />

      <section
        id="technologies"
        class="mt-6"
      >
        <h3 class="section-heading">
          Technologies I Use
        </h3>

        <ResumeTechnologies />
      </section>

      <section
        id="experience"
        class="grid gap-6 mt-4 sm:mt-6 md:mt-10 sm:gap-8 sm:grid-cols-2"
      >
        <h3 class="section-heading">
          Experience
        </h3>

        <div class="grid gap-2 mt-4">
          <!-- <CardExperience
            v-for="(experience, index) in experiences.jobs"
            :key="`experience-job-${index}`"
            :title="experience.title"
            :url="experience.url"
            :date="experience.date"
            :position="experience.position"
          /> -->
        </div>
      </section>

      <section id="featured-posts" class="mt-6">
        <h3 class="section-heading">
          Featured Posts
        </h3>

        <PostCard v-for="post in $page.posts.edges" :key="post.node.slug" :post="post.node" />
      </section>


      <section id="projects" class="mt-6">
        <h3 class="section-heading">
          Open Source Projects
        </h3>

        <ResumeProjects />
      </section>
      
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
        date_published (format: "MMMM D, YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
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
    title: 'Home'
  }
}
</script>

<style>
 .section-heading {
    @apply text-xl font-semibold text-gray-900 dark:text-gray-100;
  }
</style>
