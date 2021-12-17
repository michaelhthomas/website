<template>

  <div id="app" class="min-h-screen bg-true-gray-100 dark:bg-true-gray-900 transition-colors duration-150">
    <div>
      <Navigation />
    </div>
      
    <transition name="page" appear>
      <div class="page">
        <div class="mb-auto">
          <slot />
        </div>
      
        <div>
          <Footer />
        </div>
      </div>

    </transition>
  </div>
</template>

<script>
export default {
  name: "Default"
}
</script>

<style>
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
  @apply text-5xl mb-16 font-bold text-true-gray-800 dark:text-gray-300;
}
</style>