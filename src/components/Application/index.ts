import { withInstall } from '/@/utils';

import appLogo from './src/AppLogo.vue';
import appProvider from './src/AppProvider';

export const AppLogo = withInstall(appLogo);
export const AppProvider = withInstall(appProvider);

export { useAppProviderContext } from './src/useAppContext';
