<template>
  <ul 
    class="sticky top-4 float-left -ml-15 hidden lg:block"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <li
      class="mb-2"
      v-for="service in $static.metadata.shareServices"
      :key="service.name"
    >
      <button
        :aria-label="`${service.name} share link`"
        role="button"
        class="block rounded-full text-true-gray-300 dark:text-true-gray-600 hover:bg-true-gray-200 dark:hover:bg-true-gray-800 transition-colors duration-400"
        :style="{ color: (hover ? service.color : undefined)}"
        @click="share(service)"
      >
        <Icon
          :icon="service.icon"
          class="block h-6 w-6 m-2 transition-colors cursor-pointer"
        />
      </button>
    </li>
  </ul>
</template>

<static-query>
query {
  metadata {
    shareServices {
      name
      icon
      color
      link
    }
  }
}
</static-query>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      hover: false
    }
  },
  methods: {
    parseLink(link, valueObj) {
      const templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
      let text = link.replace(templateMatcher, (substring, value, index) => {
        value = encodeURIComponent(valueObj[value]);
        return value;
      });
      return text
    },
    share(service) {
      if (process.isClient) {
        const w= 550;
        const h = 650;
        const y = window.top.outerHeight / 2 + window.top.screenY - ( h / 2);
        const x = window.top.outerWidth / 2 + window.top.screenX - ( w / 2);
        const link = this.parseLink(service.link, {
          title: this.title,
          location: location.href,
          text: this.title + '\n' + location.href
        });
        window.open(
          link,
          service.name,
          `width=${w}, height=${h}, top=${y}, left=${x}, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,`
        )
      }
    }
  }
}
</script>