<template>
  <Layout :show-logo="false">

    <div class="wrapper-small md:px-10">
      <AuthorProfile />

      <section
        id="technologies"
        class="my-8"
      >
        <h2 class="section-heading">
          Technologies I Use
        </h2>

        <ResumeTechnologies />
      </section>

      <div class="section grid gap-10 md:grid-cols-2">
        <section id="experience">
          <h2 class="section-heading mb-4">
            Experience
          </h2>

          <ResumeExperience />
        </section>

        <section id="education">
          <h2 class="section-heading mb-4">
            Education
          </h2>

          <ResumeEducation />
        </section>
      </div>
    
      <section id="featured-posts" class="section">
        <h2 class="section-heading">
          Featured Posts
        </h2>

        <PostCard v-for="post in $page.posts.edges" :key="post.node.slug" :post="post.node" />
      </section>


      <section id="projects" class="section">
        <h2 class="section-heading">
          Open Source Projects
        </h2>

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
    title: 'Hello, world!'
  }
}
</script>

<style>
  .section {
    @apply my-8;
  }
 .section-heading {
    @apply text-xl font-semibold text-gray-900 dark:text-gray-100;
  }
</style>
