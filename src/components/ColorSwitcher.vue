<template>
  <button
    role="button"
    aria-label="Toggle dark/light"
    class="rounded-full cursor-pointer bg-gray-100 p-2 text-gray-900 dark:bg-true-gray-800 dark:text-gray-100 focus:outline-none"
    @click.prevent="toggleTheme"
  >
    <IconSun v-if="darkTheme === false" class="h-5 w-5"/>
    <IconMoon v-else class="h-5 w-5"/>

  </button>
</template>

<script>
import IconSun from "~/components/Icon/Sun.vue";
import IconMoon from "~/components/Icon/Moon.vue";

export default {
  components: {
    IconSun,
    IconMoon
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
    toggleTheme() {
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
