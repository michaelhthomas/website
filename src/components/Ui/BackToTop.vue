<script setup>
import { ref, computed, onDeactivated, onMounted } from 'vue';

const scrollPosition = ref(0)

function updateScroll() {
  scrollPosition.value = window.scrollY
}
function scrollToTop() {
  window.scroll({top: 0, left: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
onDeactivated(() => {
  window.removeEventListener('scroll', updateScroll)
})

const displayBackToTop = computed(() => {
  if (process.isClient) {
    if (scrollPosition.value > window.innerHeight && scrollPosition.value < document.body.clientHeight - window.innerHeight - 150) {
      return true
    }
    return false
  }
})
</script>

<template>
  <button
    role="button"
    aria-label="Back to top"
    class="rounded-full h-10 w-10 fixed right-6 bottom-6 cursor-pointer bg-true-gray-200 p-2 text-true-gray-900 dark:bg-true-gray-800 dark:text-true-gray-100 transition-all duration-300 hidden lg:block hover:bg-true-gray-300 dark:hover:bg-true-gray-700"
    @click="scrollToTop"
    :style="{ opacity: displayBackToTop ? '100%' : 0}"
  >
    <Icon icon="ph:caret-up" class="h-5 w-5 -mb-0.75" />
  </button>
</template>
