import type { UserConfig, ConfigEnv } from 'vite';

import { generateModifyVars } from './build/generate/generateModifyVars';
import { createVitePlugins } from './build/vite/plugin';

import { resolve } from 'path';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';

  return {
    /* plugins: [
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
    ], */
    plugins: createVitePlugins(isBuild),
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
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
  };
};
