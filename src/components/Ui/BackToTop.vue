<script setup>
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

const displayBackToTop = computed(() => {
  if (process.isClient) {
    if (
      scrollPosition.value > window.innerHeight &&
      scrollPosition.value <
        document.body.clientHeight - window.innerHeight - 150
    ) {
      return true;
    }
    return false;
  }
});
</script>

<template>
  <button
    role="button"
    aria-label="Back to top"
    class="bg-true-gray-200 text-true-gray-900 dark:bg-true-gray-800 dark:text-true-gray-100 hover:bg-true-gray-300 dark:hover:bg-true-gray-700 fixed bottom-6 right-6 hidden h-10 w-10 cursor-pointer rounded-full p-2 transition-all duration-300 lg:block"
    @click="scrollToTop"
    :style="{ opacity: displayBackToTop ? '100%' : 0 }"
  >
    <Icon
      icon="ph:caret-up"
      class="-mb-0.75 h-5 w-5"
    />
  </button>
</template>
