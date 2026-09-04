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
      class="icon inline-block leading-[2.25rem] sm:block sm:leading-[0] sm:mr-0 sm:h-9 sm:w-9 sm:rounded-full sm:p-2 sm:bg-neutral-200 sm:text-neutral-800 sm:dark:bg-neutral-800 sm:dark:text-neutral-100"
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
