import type { PropType as VuePropType } from 'vue';

declare global {
  /* const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  }; */
  // vue
  type PropType<T> = VuePropType<T>;
  type Recordable<T = any> = Record<string, T>;
  type Nullable<T> = T | null;
}

/* declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
} */
