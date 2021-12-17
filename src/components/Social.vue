<template>
  <div class="wrapper flex flex-wrap text-base text-center m-3 text-true-gray-700 dark:text-true-gray-300">
    <Link
      role="button"
      :aria-label="social.name"
      class="social-link hover:text-primary-500 mx-3 transition-colors"
      target="_blank"
      :href="social.link"
      v-for="social in $static.metadata.socials"
      :key="social.name"
    >
      <Icon
        class="h-8 w-8"
        :icon="social.icon"
      />
    </Link>
  </div>
</template>

<static-query>
query {
  metadata {
    socials {
      name
      link
      icon
    }
  }
}
</static-query>

<script>
import { Icon } from '@iconify/vue2'
export default {
  name: "Social",
  components: {
    Icon
  }
}
</script>