<template>

  <div
    id="app"
    class="min-h-screen bg-true-gray-100 dark:bg-true-gray-900 transition-colors duration-150 text-true-gray-900 dark:text-true-gray-100"
  >
    <LazyHydrate when-idle>
      <div class="navigation">
        <Navigation />
      </div>
    </LazyHydrate>
      
    <transition name="page" appear>
      <div class="page mb-auto mt-10">
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

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
  name: "Default",
  components: {
    LazyHydrate
  }
}
</script>

<style>

::selection {
  background: #b6ddf7;
}

.dark ::selection {
  background: #3498DB;
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

.wrapper {
  @apply max-w-screen-xl mx-auto;
}

.wrapper-small {
  @apply max-w-screen-lg mx-auto px-6;
}

.flex-center {
  @apply flex justify-center items-center;
}

.title {
  @apply text-5xl mb-16 font-bold text-true-gray-800 dark:text-true-gray-300;
}

</style>