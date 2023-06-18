<script setup>
defineProps({
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  link: {
    type: String
  },
  years: {
    type: String
  }
});
</script>

<template>
  <div class="my-4">
    <div class="flex items-center justify-between space-x-2">
      <h3
        class="text-true-gray-800 dark:text-true-gray-200 text-xl font-semibold"
      >
        <MLink
          :href="link"
          blank
          class="hover:underline"
        >
          {{ title }}
        </MLink>
      </h3>

      <span
        class="text-true-gray-600 dark:text-true-gray-400 text-lg font-medium"
        >{{ years }}</span
      >
    </div>

    <p class="text-true-gray-600 dark:text-true-gray-400 text-lg">
      {{ subtitle }}
    </p>
  </div>
</template>
