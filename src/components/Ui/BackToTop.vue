<script setup lang="ts">
import { ref, computed, onDeactivated, onMounted } from 'vue';

const scrollPosition = ref(0);

function updateScroll() {
  scrollPosition.value = window.scrollY;
}
function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
});
onDeactivated(() => {
  window.removeEventListener('scroll', updateScroll);
});

const showBackToTop = computed(() => {
  return (
    process.isClient &&
    scrollPosition.value > window.innerHeight &&
    scrollPosition.value < document.body.clientHeight - window.innerHeight - 150
  );
});
</script>

<template>
  <button
    role="button"
    aria-label="Scroll back to top"
    :aria-hidden="!showBackToTop"
    class="bg-true-gray-200 text-true-gray-900 dark:bg-true-gray-800 dark:text-true-gray-100 hover:bg-true-gray-300 dark:hover:bg-true-gray-700 flex-center fixed bottom-6 right-6 hidden h-10 w-10 cursor-pointer rounded-full transition-all duration-300 lg:flex"
    :style="{
      opacity: showBackToTop ? '100%' : 0,
      pointerEvents: showBackToTop ? 'initial' : 'none'
    }"
    @click="scrollToTop"
  >
    <Icon
      icon="ph:caret-up"
      class="h-5 w-5"
    />
  </button>
</template>
