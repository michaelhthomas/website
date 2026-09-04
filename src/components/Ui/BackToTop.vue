<script setup lang="ts">
import { ref, computed, onDeactivated, onMounted } from 'vue';
import CaretUpIcon from '~icons/ph/caret-up';

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
    class="bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 flex-center fixed bottom-6 right-6 hidden h-10 w-10 cursor-pointer rounded-full transition-all duration-300 lg:flex"
    :style="{
      opacity: showBackToTop ? '100%' : 0,
      pointerEvents: showBackToTop ? 'initial' : 'none'
    }"
    @click="scrollToTop"
  >
    <CaretUpIcon class="h-5 w-5" />
  </button>
</template>
