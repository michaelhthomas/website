<script setup lang="ts">
import { onMounted, ref } from 'vue';
import UiSpinner from '~src/components/Ui/Spinner.vue';
import IconGithub from '~icons/mdi/github';
import IconStar from '~icons/mdi/star';
import IconFork from '~icons/mdi/source-fork';

const projects = ref([]);
const loading = ref(false);

onMounted(async () => {
  await fetchData();
});

async function fetchData() {
  projects.value = [];
  loading.value = true;

  const response = await fetch(
    'https://api.github.com/search/repositories?q=user:michaelhthomas&sort=stars&per_page=4'
  );

  if (!response.ok) {
    throw new Error(
      `HTTP error when fetching GitHub projects! status: ${response.status}`
    );
  }

  const data = await response.json();
  loading.value = false;
  projects.value = data.items;
}
</script>

<template>
  <div class="my-5">
    <!-- Loading -->
    <div
      v-if="loading"
      class="flex items-center justify-center py-20"
    >
      <UiSpinner />
    </div>

    <!-- Loaded -->
    <div
      v-else
      class="grid grid-cols-1 gap-6 md:grid-cols-2"
    >
      <a
        v-for="(project, index) in projects"
        :key="index"
        :href="project.html_url"
        class="bg-true-gray-50 dark:bg-true-gray-800 mt-2 block transform rounded-lg p-6 shadow transition duration-200 hover:-translate-y-1.5 hover:shadow-lg lg:mt-0"
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <h3
            class="text-true-gray-800 dark:text-true-gray-100 text-lg font-medium"
          >
            {{ project.name }}
          </h3>
          <p class="text-true-gray-500 dark:text-true-gray-400 my-2 text-base">
            {{ project.description }}
          </p>
          <ul
            class="dark:text-true-gray-200 flex items-center space-x-4 text-black"
          >
            <li class="inline-flex items-center">
              <IconStar class="mr-1 h-4 w-4" />
              <span>{{ project.stargazers_count }}</span>
            </li>
            <li
              v-if="project.forks"
              class="inline-flex items-center"
            >
              <IconFork class="mr-1 h-4 w-4" />
              <span>{{ project.forks }}</span>
            </li>
          </ul>
        </div>
      </a>
      <!-- End Project Cards -->
    </div>

    <div class="mt-6 flex items-center justify-center">
      <a
        class="hover:bg-true-gray-800 flex w-full items-center justify-center rounded-lg bg-black px-10 py-3 text-white shadow-md transition duration-300 md:w-auto md:px-24"
        href="https://github.com/michaelhthomas"
        rel="noreferrer"
        target="_blank"
      >
        <IconGithub class="mr-2 h-5 w-5 text-white" />
        See More Projects
      </a>
    </div>
  </div>
</template>
