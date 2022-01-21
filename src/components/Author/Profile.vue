<template>
  <div role="banner" class="rounded-md flex flex-col-reverse bg-light-700 mb-16 py-10 px-8 justify-between md:flex-row md:items-center dark:bg-true-gray-800">
    <div class="sm:w-8/12">
        <div class="space-y-px">
          <div class="text-2xl font-semibold text-true-gray-900 sm:text-3xl md:text-4xl dark:text-true-gray-100 mb-4">
            <h1>Michael Thomas</h1>
            <h1><span class="text-blue-600 dark:text-blue-500">Full-stack</span> web developer</h1>
          </div>

          <p class="text-true-gray-800 dark:text-true-gray-200">
            Hi there! I'm Michael Thomas, a web developer and systems engineer from Columbia, South Carolina.
            I build complex web apps using <Link blank class="underline" href="https://vuejs.org/">Vue.js</Link>,
            <Link class="underline" blank href="https://nuxtjs.org/">Nuxt.js</Link> and <Link class="underline" blank href="https://windicss.com/">WindiCSS</Link>.
          </p>
        </div>
    </div>

    <div class="rounded-full h-40 mb-4 w-40 md:mb-0">
      <g-image 
        alt="avatar"
        src="~/assets/images/avatar.png"
        class="rounded-full h-40 w-40"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>