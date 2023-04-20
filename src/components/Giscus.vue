<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

if (process.isClient) {
  import('giscus');
}

const initialTheme = ref('');

function sendMessage(message) {
  const iframe = document
    .querySelector('#comments')
    .shadowRoot.querySelector('iframe');
  if (!iframe) return;
  iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
}
function updateTheme() {
  sendMessage({
    setConfig: {
      theme: window.__theme === 'light' ? 'light' : 'transparent_dark'
    }
  });
}

onMounted(() => {
  if (process.isClient) {
    initialTheme.value =
      window.__theme === 'light' ? 'light' : 'transparent_dark';
    window.addEventListener('themeChange', updateTheme);
  }
});

onUnmounted(() => {
  if (process.isClient) {
    window.removeEventListener('themeChange', updateTheme);
  }
});
</script>

<template>
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
  ></giscus-widget>
</template>
