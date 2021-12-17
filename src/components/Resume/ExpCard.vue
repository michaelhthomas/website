<template>
  <div>
    <div class="flex space-x-2 items-center justify-between">
      <h2 class="text-xl font-semibold text-true-gray-800 dark:text-true-gray-200">
        <Link
          :href="link"
          blank
          class="hover:underline"
        >
          {{ title }}
        </Link>
      </h2>

      <span
        class="text-true-gray-500 font-medium text-lg"
      >{{ years }}</span>
    </div>
    
    <h4 class="text-lg text-true-gray-600">{{ subtitle }}</h4>
  </div>
</template>

<script>
export default {
  name: "ExpCard",
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String,
    },
    link: {
      type: String
    },
    years: {
      type: String
    }
  }
}
</script>