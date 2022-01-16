<template>
  <div class="education">
    <ResumeExpCard 
      v-for="ed in $static.metadata.education"
      :key="ed.name"
      :title="ed.name"
      :subtitle="ed.role"
      :link="ed.link"
      :years="ed.years"
    />
  </div>
</template>

<static-query>
query {
  metadata {
    education {
      name
      link
      role
      years
    }
  }
}
</static-query>

<script>
import ResumeExpCard from '~/components/Resume/ExpCard.vue'

export default {
  name: "Education",
  components: {
    ResumeExpCard
  }
}
</script>