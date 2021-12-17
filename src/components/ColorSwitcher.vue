<template>
  <button
    role="button"
    aria-label="Toggle dark/light"
    class="h-9 w-9 rounded-full cursor-pointer bg-true-gray-200 p-2 text-gray-900 dark:bg-true-gray-800 dark:text-gray-100"
    @click="toggleTheme"
  >
    <Icon icon="ph:sun" v-if="darkTheme === false" class="h-5 w-5"/>
    <Icon icon="ph:moon-stars" v-else class="h-5 w-5"/>

  </button>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  },
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    /**
     * Updates the color mode value.
     */
    toggleTheme(event) {
      event.currentTarget.blur();

      this.darkTheme = !this.darkTheme
      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    /**
     * Checks the browser color mode preference.
     */
    if (window.__theme == 'dark') this.darkTheme = true
  }
}
</script>
