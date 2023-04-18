<template>
  <div
    class="wrapper text-true-gray-700 dark:text-true-gray-300 m-3 flex flex-wrap text-center text-base"
  >
    <Link
      role="button"
      :aria-label="social.name"
      class="social-link hover:text-primary-500 mx-3 transition-colors"
      target="_blank"
      :href="social.link"
      v-for="social in $static.metadata.socials"
      :key="social.name"
      :rel="social.rel"
      :utm="false"
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
      rel
    }
  }
}
</static-query>

<script>
export default {
  name: 'Social'
};
</script>
