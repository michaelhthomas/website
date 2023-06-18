<template>
  <div
    role="banner"
    class="bg-light-700 dark:bg-true-gray-800 mb-16 flex flex-col-reverse justify-between rounded-md px-8 py-10 md:flex-row md:items-center"
  >
    <div class="sm:w-8/12">
      <div class="space-y-px">
        <div
          class="text-true-gray-900 dark:text-true-gray-100 mb-4 text-2xl font-semibold sm:text-3xl md:text-4xl"
        >
          <h1>Michael Thomas</h1>
          <h1>
            <span class="text-blue-600 dark:text-blue-500">Full-stack</span> web
            developer
          </h1>
        </div>

        <p class="text-true-gray-800 dark:text-true-gray-200">
          Hi there! I'm Michael Thomas, a web developer and systems engineer
          from Columbia, South Carolina. I build complex web apps using
          <MLink
            blank
            class="underline"
            href="https://vuejs.org/"
          >
            Vue.js
          </MLink>
          ,
          <MLink
            class="underline"
            blank
            href="https://nuxtjs.org/"
          >
            Nuxt.js
          </MLink>
          and
          <MLink
            class="underline"
            blank
            href="https://windicss.com/"
          >
            WindiCSS </MLink
          >.
        </p>
      </div>
    </div>

    <div class="mb-4 h-40 w-40 rounded-full md:mb-0">
      <g-image
        alt="avatar"
        src="~/assets/images/avatar.png"
        class="h-40 w-40 rounded-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
};
</script>
