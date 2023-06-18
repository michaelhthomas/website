<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
  link: {
    type: String,
    required: false,
    default: null
  },
  icon: {
    type: String,
    required: false,
    default: null
  },
  color: {
    type: String,
    required: false,
    default: null
  }
});

/**
 * Returns possible icon name if icon prop is not passed.
 * @returns {string}
 */
const getIconName = computed(() => {
  if (props.icon) return props.icon;
  else
    return (
      'logos:' + props.title?.toLowerCase()?.replace(/[^a-zA-Z]/g, '') ||
      'arrow-right'
    );
});

/**
 * Returns appropriate style attribute for icon color
 * @returns {string}
 */
const getStyle = computed(() => {
  if (props.color) {
    return {
      color: props.color
    };
  } else {
    return null;
  }
});
</script>

<template>
  <MLink
    blank
    class="text-true-gray-900 dark:text-true-gray-100 hover:bg-light-700 dark:hover:bg-true-gray-800 flex items-center space-x-2 overflow-hidden rounded-md p-2 !no-underline transition-colors"
    :href="link"
  >
    <Icon
      :icon="getIconName"
      :style="getStyle"
      class="h-7 w-7 flex-shrink-0"
    />
    <span class="truncate">{{ title }}</span>
  </MLink>
</template>
