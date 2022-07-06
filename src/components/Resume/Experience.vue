<script setup>
import ResumeExpCard from '~/components/Resume/ExpCard.vue'
</script>

<template>
  <div class="experience">
    <ResumeExpCard 
      v-for="exp in $static.metadata.experience"
      :key="exp.name"
      :title="exp.name"
      :subtitle="exp.position"
      :link="exp.link"
      :years="exp.years"
    />
  </div>
</template>

<static-query>
query {
  metadata {
    experience {
      name
      link
      position
      years
    }
  }
}
</static-query>
