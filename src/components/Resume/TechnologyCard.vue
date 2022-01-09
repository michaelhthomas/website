<template>
  <Link
    blank
    class="flex items-center space-x-2 overflow-hidden text-true-gray-900 dark:text-true-gray-100 hover:bg-light-700 dark:hover:bg-true-gray-800 p-2 rounded-md transition-colors !no-underline"
    :href="link"
  >
      <Icon :icon="getIconName" :style="getStyle" class="flex-shrink-0 w-7 h-7" />
      <span class="truncate">{{ title }}</span>
  </Link>
</template>

<script>
export default {
  name: "TechnologyCard",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    link: {
      type: String,
      required: false,
      default: null,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    color: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    /**
     * Returns possible icon name if icon prop is not passed.
     * @returns {string}
     */
    getIconName() {
      if (this.icon) return this.icon
      else
        return (
          "logos:" + this.title?.toLowerCase()?.replace(/[^a-zA-Z]/g, "") || "arrow-right"
        )
    },
    /**
     * Returns appropriate style attribute for icon color
     * @returns {string}
     */
    getStyle() {
      if (this.color) {
        return ({
          color: this.color
        })
      } else {
        return null
      }
    }
  },
}
</script>
