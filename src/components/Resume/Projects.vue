<template>
  <div class="wrapper-small my-5">
    <!-- Loading -->
    <div
      v-if="loading"
      class="flex justify-center items-center py-20"
    >
      <UiSpinner />
    </div>

    <!-- Loaded -->
    <div
      v-else
      class='grid grid-cols-1 md:grid-cols-2 gap-6'
    >
      <a
        v-for='(project, index) in projects'
        :key='index'
        :href='project.html_url'
        class='block bg-gray-50 dark:bg-true-gray-800 p-6 shadow rounded-lg mt-2 lg:mt-0'
        rel="noreferrer"
        target='_blank'
      >
        <div>
          <h3 class='text-lg font-medium text-gray-800 dark:text-gray-100'>
            {{ project.name }}
          </h3>
          <p class='my-2 text-base text-gray-500 dark:text-gray-400'>
            {{ project.description }}
          </p>
          <ul class='flex items-center space-x-4 text-black dark:text-gray-200'>
            <li class='inline-flex items-center'>
              <IconStar class="h-4 w-4 mr-1"/>
              <span>{{ project.stargazers_count }}</span>
            </li>
            <li v-if='project.forks' class='inline-flex items-center'>
              <IconFork class="h-4 w-4 mr-1"/>
              <span>{{ project.forks }}</span>
            </li>
          </ul>
        </div>
      </a> <!-- End Project Cards -->     
    </div>

    <div class='flex items-center justify-center mt-6'>
      <a
        class='bg-black w-full md:w-auto flex items-center justify-center px-10 md:px-24 py-3 shadow-md hover:bg-true-gray-800 rounded-lg text-white transition duration-300'
        href='https://github.com/michaelhthomas'
        rel="noreferrer"
        target='_blank'
      >
        <IconGithub class="text-white h-6 w-6 mr-3"/>
        See More Projects
      </a>
    </div>
  </div>
</template>

<script>
import UiSpinner from '~/components/Ui/Spinner.vue'
import PostCard from '~/components/Post/Card.vue'

export default {
  components: {
    UiSpinner,
    PostCard
  },
  data() {
    return {
      projects: [],
      loading: false,
      error: null
    }
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      this.error = this.projects = null
      this.loading = true

      const response = await fetch('https://api.github.com/search/repositories?q=user:michaelhthomas&sort=stars&per_page=4')
      
      if (!response.ok) {
        this.error = response.statusText
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      // this.loading = false
      this.projects = data.items
    }
  }
}
</script>
