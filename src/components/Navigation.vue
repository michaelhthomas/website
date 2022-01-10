<template>
  <div class="border-t-8 border-primary-600 dark:border-true-gray-700">
    <nav class="wrapper py-6">
      <div class="px-10 flex justify-between items-center">
        <div class="logo">
          <g-link to="/">
            <h1 class="text-2xl font-semibold text-true-gray-700 dark:text-true-gray-200">Michael Thomas</h1>
          </g-link>
        </div>

        <div class="flex flex-row gap-5">
          <g-link class="nav-link" to="/blog">Blog</g-link>
          <g-link class="nav-link" to="/about">About</g-link>
          <UiColorSwitcher />
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  }
}
</script>

<style>
.mobile-link {
  @apply block px-3 py-2 text-lg text-true-gray-900 rounded-md text-white font-medium text-center;
}

.nav-link {
  @apply font-medium text-center text-lg text-true-gray-700 dark:text-true-gray-200 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-100;
  line-height: 2.25rem;
}
</style>
