<script setup lang="ts">
import PhSun from '~icons/ph/sun';
import PhMoon from '~icons/ph/moon-stars';
import { onMounted, ref } from 'vue';

declare global {
  interface Window {
    __theme: 'light' | 'dark' | undefined;
    __setPreferredTheme: (theme: 'light' | 'dark') => void;
  }
}

const darkTheme = ref(false);

onMounted(() => {
  darkTheme.value = window.__theme === 'dark';
});

/**
 * Updates the color mode value.
 */
function toggleTheme(event: MouseEvent) {
  (event.currentTarget as HTMLButtonElement | undefined)?.blur();

  darkTheme.value = !darkTheme.value;
  // This is using a script that is added in index.html
  window.__setPreferredTheme(darkTheme.value ? 'dark' : 'light');
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
        <PhSun class="h-5 w-5" />
      </div>
      <div v-show="!darkTheme">
        <PhMoon class="h-5 w-5" />
      </div>
    </div>
  </button>
</template>
