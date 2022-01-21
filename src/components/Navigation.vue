<template>
  <div class="border-t-8 border-primary-600 dark:border-true-gray-700">
    <nav class="wrapper py-6">
      <div class="px-10 flex flex-wrap gap-5 justify-between items-center">
        <div class="logo">
          <g-link to="/">
            <h1 class="text-2xl font-semibold text-true-gray-700 dark:text-true-gray-200">Michael Thomas</h1>
          </g-link>
        </div>

        <div class="mobile-button block sm:hidden">
          <button
            role="button"
            aria-label="Open main menu"
            class="h-9 w-9 rounded-full cursor-pointer relative bg-true-gray-200 p-2 text-true-gray-900 dark:bg-true-gray-800 dark:text-true-gray-100"
            @click="toggle"
          >
            <span class="sr-only">Open main menu</span>
            <div class="block w-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span aria-hidden="true" class="block absolute h-0.25 w-full bg-current transform transition duration-200 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
              <span aria-hidden="true" class="block absolute h-0.25 w-full bg-current transform transition duration-200 ease-in-out" :class="{'opacity-0': open } "></span>
              <span aria-hidden="true" class="block absolute h-0.25 w-full bg-current transform transition duration-200 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
            </div>
          </button>
        </div>

        <!-- Slide In/Out -->
        <transition
          enter-active-class="duration-200 ease-out"
          enter-class="scale-y-0 opacity-0"
          enter-to-class="scale-y-100 opacity-100"
          leave-active-class="duration-200 ease-out"
          leave-class="scale-y-100 opacity-100"
          leave-to-class="scale-y-0 opacity-0"
        >
          <div
            class="menu flex basis-full bg-true-gray-200 dark:bg-true-gray-800 rounded-md flex-col justify-center gap-2 py-2 transition-all transform origin-top"
            sm="bg-transparent dark:bg-transparent basis-auto flex-row py-0 gap-5"
            v-show="open"
          >
            <g-link class="nav-link" to="/blog">Blog</g-link>
            <g-link class="nav-link" to="/about">About</g-link>
            <UiColorSwitcher />
          </div>
        </transition>

      </div>
    </nav>
  </div>
</template>


<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  }
}
</script>

<style>
.mobile-link {
  @apply block px-3 py-2 text-lg text-true-gray-900 rounded-md text-white font-medium text-center;
}


.menu[style] {
  @apply sm:!flex;
}

.nav-link {
  @apply font-medium text-center text-lg text-true-gray-700 dark:text-true-gray-200 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-100;
  line-height: 2.25rem;
}
</style>
