declare module 'vue-lazy-hydration' {
  const LazyHydrate: Omit<
    import('vue').Component<
      { hydrated: boolean },
      {
        cleanup(): void;
        hydrate(): void;
      },
      {
        interactionEvents: string[];
      },
      {
        idleTimeout: number;
        onInteraction: boolean | string | string[];
        never: boolean;
        triggerHydration: boolean;
        whenIdle: boolean;
      }
    >,
    'functional'
  >;

  export function hydrateNever(
    component: import('vue').AsyncComponent | import('vue').Component
  ): import('vue').AsyncComponent | import('vue').Component;
  export function hydrateWhenIdle(
    component: import('vue').AsyncComponent | import('vue').Component,
    options: { ignoredProps?: string[] }
  ): import('vue').AsyncComponent | import('vue').Component;
  export function hydrateWhenVisible(
    component: import('vue').AsyncComponent | import('vue').Component,
    options: { ignoredProps?: string[]; observerOptions?: string[] }
  ): import('vue').AsyncComponent | import('vue').Component;
  export function hydrateOnInteraction(
    component: import('vue').AsyncComponent | import('vue').Component,
    options: { event?: string; ignoredProps?: string[] }
  ): import('vue').AsyncComponent | import('vue').Component;

  export default LazyHydrate;
}
