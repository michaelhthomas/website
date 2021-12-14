<template>
  <div class="wrapper flex flex-wrap text-base text-center m-3 text-gray-800 dark:text-gray-200">
    <a
      aria-label="Github"
      class="social-link hover:text-primary-500 mx-3"
      target="_blank"
      :href=$static.metadata.devGithubLink
    >
      <IconGithub class="h-6 w-6"/>
    </a>

    <a
      aria-label="Twitter"
      class="social-link hover:text-primary-500 mx-3"
      target="_blank"
      :href=$static.devTwitterLink
    >
      <IconTwitter class="h-6 w-6"/>
    </a>

    <a
      aria-label="LinkedIn"
      class="social-link hover:text-primary-500 mx-3"
      target="_blank"
      :href=$static.devLinkedinLink
    >
      <IconLinkedin class="h-6 w-6"/>
    </a>
  </div>
</template>

<static-query>
query {
  metadata {
    devGithubLink
  }
}
</static-query>

<script>
import IconGithub from '~/components/Icon/Github.vue'

export default {
  components: {
    IconGithub
  }
}
</script>