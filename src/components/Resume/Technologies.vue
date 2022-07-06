<script setup>
import ResumeTechnologyCard from '~/components/Resume/TechnologyCard.vue'

const technologies = [
  {
    name: "JavaScript",
    link: "https://en.wikipedia.org/wiki/JavaScript",
    icon: "custom:javascript"
  },
  {
    name: "HTML5",
    link: "https://en.wikipedia.org/wiki/HTML",
    icon: "vscode-icons:file-type-html"
  },
  {
    name: "Nuxt.js",
    link: "https://nuxtjs.org",
    icon: "logos:nuxt-icon"
  },
  {
    name: "Vue.js",
    link: "https://vuejs.org",
    icon: "logos:vue"
  },
  {
    name: "Windi CSS",
    link: "https://windicss.org",
    icon: "custom:windicss"
  },
  {
    name: "Node.js",
    link: "https://nodejs.org",
    icon: "logos:nodejs-icon"
  },
  {
    name: "TypeScript",
    link: "https://typescriptlang.org",
    icon: "logos:typescript-icon"
  },
  {
    name: "Sass",
    link: "https://sass-lang.com/",
    icon: "logos:sass"
  },
  {
    name: "Figma",
    link: "https://figma.com",
    icon: "logos:figma"
  },
  {
    name: "WordPress",
    link: "https://wordpress.org",
    icon: "mdi:wordpress",
    color: "#3B82F6"
  },
  {
    name: "PHP",
    link: "https://php.net",
    icon: "bx:bxl-php",
    color: "#8B5CF6"
  },
  {
    name: "Twig",
    link: "https://twig.symfony.com",
    icon: "vscode-icons:file-type-twig"
  },
]
</script>

<template>
  <div class="grid grid-cols-2 gap-1 mt-4 sm:grid-cols-3 md:grid-cols-4">
    <ResumeTechnologyCard
      v-for="(technology, index) in technologies"
      :key="`skill-${index}`"
      :title="technology.name"
      :icon="technology.icon"
      :color="technology.color"
      :link="technology.link"
    />
  </div>
</template>
