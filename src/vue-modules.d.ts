/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'vue' {
  interface ComponentCustomProperties {
    $page: any;
    $static: any;
  }
}

// prevent typescript from horribly borking types
export {};
