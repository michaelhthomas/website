<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import('giscus');

const initialTheme = ref('');

function sendMessage(message: ISetConfigMessage) {
  const iframe = document
    .querySelector('#comments')
    .shadowRoot.querySelector('iframe');
  iframe?.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
}
function updateTheme() {
  sendMessage({
    setConfig: {
      theme: window.__theme === 'light' ? 'light' : 'transparent_dark'
    }
  });
}

onMounted(() => {
    initialTheme.value =
      window.__theme === 'light' ? 'light' : 'transparent_dark';
    window.addEventListener('themeChange', updateTheme);
});

onUnmounted(() => {
    window.removeEventListener('themeChange', updateTheme);
});
</script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <giscus-widget
    id="comments"
    repo="michaelhthomas/website"
    repoId="MDEwOlJlcG9zaXRvcnkzNzg5ODc5NDk="
    category="Comments"
    categoryId="DIC_kwDOFpblrc4CQCwn"
    mapping="title"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    :theme="initialTheme"
    lang="en"
    loading="lazy"
  />
</template>
