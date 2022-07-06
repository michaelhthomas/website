<script setup>
import { onMounted, reactive, ref } from 'vue';
import UiSpinner from '~/components/Ui/Spinner.vue'

const projects = ref([])
const loading = ref(false)

onMounted(async () => {
  await fetchData()
})

async function fetchData() {
  if (process.isClient) {
    projects.value = []
    loading.value = true

    const response = await fetch('https://api.github.com/search/repositories?q=user:michaelhthomas&sort=stars&per_page=4')
    
    if (!response.ok) {
      throw new Error(`HTTP error when fetching GitHub projects! status: ${response.status}`)
    }

    const data = await response.json()
    loading.value = false
    projects.value = data.items
  }
}
</script>

<template>
  <div class="my-5">
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
        class='block bg-true-gray-50 dark:bg-true-gray-800 p-6 shadow rounded-lg mt-2 lg:mt-0 hover:shadow-lg transform hover:-translate-y-1.5 transition duration-200'
        rel="noreferrer"
        target='_blank'
      >
        <div>
          <h3 class='text-lg font-medium text-true-gray-800 dark:text-true-gray-100'>
            {{ project.name }}
          </h3>
          <p class='my-2 text-base text-true-gray-500 dark:text-true-gray-400'>
            {{ project.description }}
          </p>
          <ul class='flex items-center space-x-4 text-black dark:text-true-gray-200'>
            <li class='inline-flex items-center'>
              <Icon icon="mdi:star" class="h-4 w-4 mr-1"/>
              <span>{{ project.stargazers_count }}</span>
            </li>
            <li v-if='project.forks' class='inline-flex items-center'>
              <Icon icon="mdi:source-fork" class="h-4 w-4 mr-1"/>
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
        <Icon icon="mdi:github" class="text-white h-5 w-5 mr-2"/>
        See More Projects
      </a>
    </div>
  </div>
</template>
