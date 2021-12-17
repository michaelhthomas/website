<template>
  <div class="education">
    <ResumeExpCard 
      v-for="ed in education"
      :key="ed.name"
      :title="ed.name"
      :subtitle="ed.role"
      :link="ed.link"
      :years="ed.years"
    />
  </div>
</template>

<script>
import ResumeExpCard from '~/components/Resume/ExpCard.vue'

export default {
  name: "Education",
  components: {
    ResumeExpCard
  },
  data() {
    return {
      education: [
        {
          name: "River Bluff High School",
          link: "https://schools.lexington1.net/RBHS",
          role: "High School Student",
          years: "2019 - 2022"
        }
      ]
    }
  }
}
</script>