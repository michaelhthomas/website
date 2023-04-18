<template>
  <div
    class="text-true-gray-700 dark:text-true-gray-200 m-8 flex h-full text-center"
  >
    <div class="m-auto">
      <h2 class="text-xl font-semibold md:text-2xl lg:text-3xl">
        <span class="dark:text-true-gray-300 font-normal"> Hey, I am </span
        >{{ $config.devName }}
      </h2>
      <h3
        class="text-primary dark:text-primary text-2xl font-bold md:text-3xl lg:text-4xl"
      >
        a {{ $config.devRole }}
      </h3>
      <p class="text-lg font-semibold lg:text-xl">
        {{ $config.devDescription }}
      </p>

      <div class="mt-5">
        <TechStack />
      </div>
    </div>
  </div>
</template>
