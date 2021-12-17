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
  >
    <slot />
  </g-link>

  <!-- External URL -->
  <a
    v-else
    :href="href && (utm === false ? href : getUtmLink)"
    :target="blank ? '_blank' : ''"
    rel="noreferrer noopener"
    :title="title"
  >
    <slot />
  </a>
</template>