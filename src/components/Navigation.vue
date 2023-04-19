<template>
  <div class="border-primary-600 dark:border-true-gray-700 border-t-8">
    <nav class="wrapper py-6">
      <div class="flex flex-wrap items-center justify-between gap-5 px-10">
        <div class="logo">
          <g-link to="/">
            <h1
              class="text-true-gray-700 dark:text-true-gray-200 text-2xl font-semibold"
            >
              Michael Thomas
            </h1>
          </g-link>
        </div>

        <div class="mobile-button block sm:hidden">
          <button
            role="button"
            aria-label="Open main menu"
            class="bg-true-gray-200 text-true-gray-900 dark:bg-true-gray-800 dark:text-true-gray-100 relative h-9 w-9 cursor-pointer rounded-full p-2"
            @click="toggle"
          >
            <span class="sr-only">Open main menu</span>
            <div
              class="absolute left-1/2 top-1/2 block w-4 -translate-x-1/2 -translate-y-1/2 transform"
            >
              <span
                aria-hidden="true"
                class="h-0.25 absolute block w-full transform bg-current transition duration-200 ease-in-out"
                :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
              ></span>
              <span
                aria-hidden="true"
                class="h-0.25 absolute block w-full transform bg-current transition duration-200 ease-in-out"
                :class="{ 'opacity-0': open }"
              ></span>
              <span
                aria-hidden="true"
                class="h-0.25 absolute block w-full transform bg-current transition duration-200 ease-in-out"
                :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
              ></span>
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
            class="menu bg-true-gray-200 dark:bg-true-gray-800 flex basis-full origin-top transform flex-col justify-center gap-2 rounded-md py-2 transition-all"
            sm="bg-transparent dark:bg-transparent basis-auto flex-row py-0 gap-5"
            v-show="open"
          >
            <g-link
              class="nav-link"
              to="/blog"
              >Blog</g-link
            >
            <g-link
              class="nav-link"
              to="/about"
              >About</g-link
            >
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
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style>
.mobile-link {
  @apply text-true-gray-900 block rounded-md px-3 py-2 text-center text-lg font-medium text-white;
}

.menu[style] {
  @apply sm:!flex;
}

.nav-link {
  @apply text-true-gray-700 dark:text-true-gray-200 hover:text-primary-500 dark:hover:text-primary-500 text-center text-lg font-medium leading-[2.25rem] transition-colors duration-100;
}
</style>
