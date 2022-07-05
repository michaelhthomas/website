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

<script>
import 'giscus'

export default {
  data() {
    return {
      initialTheme: window.__theme
    }
  },
  methods: {
    sendMessage(message) {
      const iframe = document.querySelector('#comments').shadowRoot.querySelector('iframe');
      if (!iframe) return;
      iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    },
    updateTheme() {
      this.sendMessage({
        setConfig: {
          theme: window.__theme
        }
      })
    }
  },
  created() {
    this.updateTheme
    window.addEventListener("themeChange", this.updateTheme)
  },
}
</script>