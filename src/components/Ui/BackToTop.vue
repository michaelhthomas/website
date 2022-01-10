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

<script>
export default {
  data() {
    return {
      scrollPosition: null,
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    scrollToTop() {
      window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  computed: {
    displayBackToTop() {
      if (process.isClient) {
        if (this.scrollPosition > window.innerHeight && this.scrollPosition < document.body.clientHeight - window.innerHeight - 150) {
          return true
        }
        return false
      }
    }
  }
}
</script>