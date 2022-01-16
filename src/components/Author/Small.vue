<template>
  <div class="rounded-md bg-light-700 dark:bg-true-gray-800 p-10 flex gap-3 flex-wrap sm:flex-nowrap justify-center text-center sm:text-left">
    <div class="flex-shrink-0 rounded-full h-40 mb-4 w-40 md:mb-0">
      <g-image 
        alt="avatar"
        src="~/assets/images/avatar.png"
        class="rounded-full h-40 w-40"
      />
    </div>

    <div class="flex-grow flex flex-col justify-center text-true-gray-800 dark:text-true-gray-100">
      <h1 class="text-3xl font-semibold mb-2">
        Michael Thomas
      </h1>
      <p>
        I'm Michael Thomas, a web developer and systems engineer from Columbia, South Carolina.
        I love to build stuff, break stuff, and most importantly, learn from the experience. I 
        like to blog about my experiences with Linux, self-hosting, and app development.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorSmall"
}
</script>