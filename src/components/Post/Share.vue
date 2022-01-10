<template>
  <ul class="sticky top-4 float-left -ml-15 group hidden lg:block">
    <li
      class="mb-2"
      v-for="service in services"
      :key="service.name"
    >
      <button
        :aria-label="`${service.name} share link`"
        role="button"
        class="block rounded-full hover:bg-true-gray-200 dark:hover:bg-true-gray-800 transition-colors"
        @click="share(service)"
      >
        <Icon
          :icon="service.icon"
          :class="`block h-6 w-6 m-2 text-true-gray-300 dark:text-true-gray-600 group-hover:text-${service.color} transition-colors cursor-pointer`"
        />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    if (process.isClient) {
      return {
        services: [
          {
            name: 'twitter',
            icon: 'mdi:twitter',
            color: 'blue-500',
            link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              this.title + "\n" + location.href
            )}`
          },
          {
            name: 'reddit',
            icon: 'mdi:reddit',
            color: 'orange-500',
            link: `https://reddit.com/submit?url=${encodeURIComponent(
              location.href
            )}`
          },
          {
            name: 'telegram',
            icon: 'mdi:telegram',
            color: 'light-blue-500',
            link: `https://telegram.me/share/url?url=${encodeURIComponent(
              location.href
            )}`
          },
        ]
      }
    }
  },
  methods: {
    share(service) {
      if (process.isClient) {
        const w= 550;
        const h = 650;
        const y = window.top.outerHeight / 2 + window.top.screenY - ( h / 2);
        const x = window.top.outerWidth / 2 + window.top.screenX - ( w / 2);
        window.open(
          service.link,
          service.name,
          `width=${w}, height=${h}, top=${y}, left=${x}, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,`
        )
      }
    }
  }
}
</script>