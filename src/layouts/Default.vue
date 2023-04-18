<script setup>
import LazyHydrate from 'vue-lazy-hydration';
</script>

<template>
  <div
    id="app"
    class="bg-true-gray-100 dark:bg-true-gray-900 text-true-gray-900 dark:text-true-gray-100 min-h-screen transition-colors duration-150"
  >
    <LazyHydrate when-idle>
      <div class="navigation">
        <Navigation />
      </div>
    </LazyHydrate>

    <transition
      name="page"
      appear
    >
      <div class="page mb-auto mt-5 md:mt-10">
        <slot />
      </div>
    </transition>

    <LazyHydrate when-visible>
      <div class="footer">
        <Footer />
      </div>
    </LazyHydrate>
  </div>
</template>

<style>
::selection {
  background: #b6ddf7;
}

.dark ::selection {
  background: #3498db;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.page {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}

html {
  @apply bg-primary-600;
}

html.dark {
  @apply bg-true-gray-700;
}

.wrapper {
  @apply mx-auto max-w-screen-xl;
}

.wrapper-small {
  @apply mx-auto max-w-screen-lg px-6;
}

.flex-center {
  @apply flex items-center justify-center;
}

.title {
  @apply text-true-gray-800 dark:text-true-gray-300 mb-16 text-5xl font-bold;
}
</style>
