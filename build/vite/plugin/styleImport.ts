/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) {
    return [];
  }
  const styleImportPlugin = ViteComponents({
    globalComponentsDeclaration: true,
    customComponentResolvers: [
      AntDesignVueResolver({
        resolveIcons: true,
      }),
    ],
  });
  return styleImportPlugin;
}
