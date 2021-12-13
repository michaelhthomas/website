<template>
	<div class="author">

		<g-image alt="Author image" class="author__image" src="~/assets/images/author.png" width="180" height="180" blur="5" />

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
			Hi there! I'm Michael Thomas, a web developer and systems architect. I build complex web apps using Vue.js, Nuxt.js, and SASS, and spend a lot of my time experimenting with Linux, Dev Ops, etc. 
		</p>

		<p class="author__links">
			<a href="//reddit.com/u/linux_overuser">Reddit</a>
			<a href="//github.com/michaelhthomas">GitHub</a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>
