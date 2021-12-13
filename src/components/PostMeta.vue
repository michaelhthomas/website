<template>
   <div class="post-meta">
      Posted {{ (post.properties.date_published) ? post.properties.date_published.date.start : "" }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
