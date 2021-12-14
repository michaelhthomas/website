<template>
  <div class="grid grid-cols-2 gap-2 mt-4 sm:grid-cols-3 md:grid-cols-4">
    <ResumeTechnologyCard
      v-for="(technology, index) in technologies"
      :key="`skill-${index}`"
      :title="technology"
    />
  </div>
</template>

<script>
import ResumeTechnologyCard from '~/components/Resume/TechnologyCard.vue'
export default {
  components: {
    ResumeTechnologyCard
  },
  data() {
    return {
      technologies: [
        "JavaScript",
        "HTML5",
        "Nuxt.js",
        "Vue.js",
        "Tailwind CSS",
        "Node.js",
        "TypeScript",
        "Sass",
        "Figma",
        "WordPress",
        "PHP",
        "React.js",
      ]
    }
  }
}
</script>
