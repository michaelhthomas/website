<script setup>
import { ref } from 'vue';
import Icon from '../Icon.vue';

const props = defineProps({
  title: String
});

const hover = ref(false);

function parseLink(link, valueObj) {
  const templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  let text = link.replace(templateMatcher, (substring, value) => {
    value = encodeURIComponent(valueObj[value]);
    return value;
  });
  return text;
}

function share(service) {
  if (process.isClient) {
    const w = 550;
    const h = 650;
    const y = window.top.outerHeight / 2 + window.top.screenY - h / 2;
    const x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
    const link = parseLink(service.link, {
      title: props.title,
      location: location.href,
      text: props.title + '\n' + location.href
    });
    window.open(
      link,
      service.name,
      `width=${w}, height=${h}, top=${y}, left=${x}, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,`
    );
  }
}
</script>

<template>
  <ul
    class="-mr-15 sticky top-4 float-right hidden lg:block"
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
        class="text-true-gray-300 dark:text-true-gray-600 hover:bg-true-gray-200 dark:hover:bg-true-gray-800 duration-400 block rounded-full transition-colors"
        :style="{ color: hover ? service.color : undefined }"
        @click="share(service)"
      >
        <Icon
          :icon="service.icon"
          class="m-2 block h-6 w-6 cursor-pointer transition-colors"
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
