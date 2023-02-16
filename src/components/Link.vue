<template>
  <!-- Internal URL -->
  <g-link
    v-if="
      href &&
      ((isInternalPage === true && external === false) || internal === true)
    "
    :to="href"
    :target="blank && '_blank'"
    :title="title"
    :rel="rel"
    class="link"
  >
    <slot />
  </g-link>

  <!-- External URL -->
  <a
    v-else
    :href="href && (utm === false ? href : getUtmLink)"
    :target="blank ? '_blank' : ''"
    :rel="[...rel, 'noreferrer', 'noopener'].join(' ')"
    :title="title"
    class="link"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    href: {
      required: true,
      default: "",
    },
    blank: {
      type: Boolean,
      required: false,
      default: false,
    },
    internal: {
      type: Boolean,
      required: false,
      default: false,
    },
    external: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    utm: {
      type: Boolean,
      required: false,
      default: true,
    },
    rel: {
      type: Array,
      required: false,
      default: [],
    },
  },
  computed: {
    /**
     * Checks if the href leads to an internal page and returns boolean.
     * @returns {boolean}
     */
    isInternalPage() {
      const href = this.href
      if (typeof href === "object") return true
      else if (typeof href === "string" && ["/", "#"].includes(href[0]))
        return true
      else return false
    },
    /**
     * Adds UTM query parameter to URL and returns it.
     * @returns {string}
     */
    getUtmLink() {
      try {
        const url = new URL(this.href)
        url.searchParams.append("utm_source", "michaelt.xyz")
        return url.href
      } catch (err) {
        return this.href
      }
    },
  },
}
</script>

<style scoped>
.underline {
  @apply bg-gradient-to-r from-primary-300 to-primary-300 dark:from-primary-700 dark:to-primary-700;
  text-decoration: none;

  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 100%;
  transition: all 200ms;
}

.underline:hover {
  background-size: 100% 100%;
}
</style>