import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import vueJsx from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

import { resolve } from 'path';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS(),
    ViteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
        }),
      ],
    }),
  ],
  server: {
    port: 579,
    host: true,
  },
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
    ],
  },
});
