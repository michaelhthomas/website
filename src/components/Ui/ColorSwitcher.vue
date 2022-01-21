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
        <Icon icon="ph:sun" class="h-5 w-5" />
      </div>
      <div v-show="!darkTheme">
        <Icon icon="ph:moon-stars" class="h-5 w-5" />
      </div>
    </div>
  </button>
</template>

<script>
import Icon from "../Icon.vue";

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
