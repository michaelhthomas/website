<script setup>
import { onMounted, ref } from 'vue';
import Icon from '../Icon.vue';

const darkTheme = ref(false);

onMounted(() => {
  if (process.isClient) darkTheme.value = window.__theme === 'dark';
});

/**
 * Updates the color mode value.
 */
function toggleTheme(event) {
  event.currentTarget.blur();

  darkTheme.value = !darkTheme.value;
  if (process.isClient) {
    // This is using a script that is added in index.html
    window.__setPreferredTheme(darkTheme.value ? 'dark' : 'light');
  }
}
</script>

<template>
  <button
    role="button"
    aria-label="Toggle dark/light"
    class="cursor-pointer"
    @click="toggleTheme"
  >
    <div
      class="icon inline-block leading-[2.25rem]"
      sm="block leading-0 mr-0 h-9 w-9 rounded-full p-2 bg-true-gray-200 text-true-gray-800 dark:bg-true-gray-800 dark:text-true-gray-100"
    >
      <div v-show="darkTheme">
        <Icon
          icon="ph:sun"
          class="h-5 w-5"
        />
      </div>
      <div v-show="!darkTheme">
        <Icon
          icon="ph:moon-stars"
          class="h-5 w-5"
        />
      </div>
    </div>
  </button>
</template>
