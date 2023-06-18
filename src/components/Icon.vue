<template>
  <span
    class="iconify"
    :data-icon="icon"
    :data-inline="inline"
  />
</template>

<script>
import { addCollection } from '@iconify/iconify';

addCollection({
  prefix: 'custom',
  icons: {
    javascript: {
      body: '<path fill="#EFD81D" d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"/>',
      width: 512,
      height: 512
    },
    windicss: {
      body: '<g clip-path="url(#prefix__prefix__clip0)"><path d="M12.694 4.687A3.97 3.97 0 008.729.72c-2.304 0-3.682 1.728-3.682 3.4h2.266c0-.471.44-1.134 1.416-1.134.938 0 1.7.763 1.7 1.7 0 .937-.684 1.7-2.409 1.7H1.85v2.266h6.17c2.912 0 4.675-1.78 4.675-3.966zm0 0A3.97 3.97 0 008.729.72c-2.304 0-3.682 1.728-3.682 3.4h2.266c0-.471.44-1.134 1.416-1.134.938 0 1.7.763 1.7 1.7 0 .937-.684 1.7-2.409 1.7H1.85v2.266h6.17c2.912 0 4.675-1.78 4.675-3.966z" fill="url(#prefix__prefix__paint0_linear)"></path> <path d="M17.722 19.313a3.97 3.97 0 01-3.966 3.966c-2.305 0-3.683-1.728-3.683-3.4h2.267c0 .471.44 1.134 1.416 1.134.937 0 1.7-.763 1.7-1.7 0-.937-.862-1.7-2.409-1.7H6.2v-2.266h6.847c2.911 0 4.675 1.78 4.675 3.966zm0 0a3.97 3.97 0 01-3.966 3.966c-2.305 0-3.683-1.728-3.683-3.4h2.267c0 .471.44 1.134 1.416 1.134.937 0 1.7-.763 1.7-1.7 0-.937-.862-1.7-2.409-1.7H6.2v-2.266h6.847c2.911 0 4.675 1.78 4.675 3.966z" fill="url(#prefix__prefix__paint1_linear)"></path> <path d="M18.316 4.217c-2.5 0-4.263 1.901-4.263 4.401h2.008c0-1.243.902-2.145 2.255-2.145 1.354 0 2.03.902 2.03 2.145 0 1.243-.878 2.266-3.27 2.266H1.849v2.267h15.565c3.542 0 5.188-2.277 5.188-4.533 0-2.5-1.691-4.4-4.286-4.4z" fill="url(#prefix__prefix__paint2_linear)"></path> <path d="M4.82 15.347H1.849v2.286h2.97v-2.286z" fill="url(#prefix__prefix__paint3_linear)"></path></g> <defs><linearGradient id="prefix__prefix__paint0_linear" x1="3.653" y1="2.638" x2="16.737" y2="23.279" gradientUnits="userSpaceOnUse"><stop offset=".078" stop-color="#54C8F1"></stop> <stop offset=".573" stop-color="#41A2EF"></stop> <stop offset="1" stop-color="#3386EE"></stop></linearGradient> <linearGradient id="prefix__prefix__paint1_linear" x1="3.653" y1="2.638" x2="16.737" y2="23.279" gradientUnits="userSpaceOnUse"><stop offset=".078" stop-color="#54C8F1"></stop> <stop offset=".573" stop-color="#41A2EF"></stop> <stop offset="1" stop-color="#3386EE"></stop></linearGradient> <linearGradient id="prefix__prefix__paint2_linear" x1="3.653" y1="2.638" x2="16.737" y2="23.279" gradientUnits="userSpaceOnUse"><stop offset=".078" stop-color="#54C8F1"></stop> <stop offset=".573" stop-color="#41A2EF"></stop> <stop offset="1" stop-color="#3386EE"></stop></linearGradient> <linearGradient id="prefix__prefix__paint3_linear" x1="3.653" y1="2.638" x2="16.737" y2="23.279" gradientUnits="userSpaceOnUse"><stop offset=".078" stop-color="#54C8F1"></stop> <stop offset=".573" stop-color="#41A2EF"></stop> <stop offset="1" stop-color="#3386EE"></stop></linearGradient> <clipPath id="prefix__prefix__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs>',
      width: 24,
      height: 24
    }
  }
});

export default {
  name: 'Icon',
  props: {
    icon: {
      type: String
    },
    inline: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style>
svg[data-inline] {
  display: inline;
}
</style>
