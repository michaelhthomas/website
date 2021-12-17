<template>
  <div class="experience">
    <ResumeExpCard 
      v-for="exp in experience"
      :key="exp.name"
      :title="exp.name"
      :subtitle="exp.position"
      :link="exp.link"
      :years="exp.years"
    />
  </div>
</template>

<script>
import ResumeExpCard from '~/components/Resume/ExpCard.vue'

export default {
  name: "Experience",
  components: {
    ResumeExpCard
  },
  data() {
    return {
      experience: [
        {
          name: "Cognito Forms",
          link: "https://cognitoforms.com",
          position: "Software Development Intern",
          years: "2021 - Present"
        }
      ]
    }
  }
}
</script>