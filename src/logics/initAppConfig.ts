/**
 * Application configuration
 */
import type { ProjectConfig } from '/#/config';
import { useAppStore } from '/@/store/modules/app';
import projectSetting from '/@/settings/projectSetting';
import { deepMerge } from '/@/utils';

// Initial project configuration
export function initAppConfigStore() {
  const appStore = useAppStore();
  let projCfg: ProjectConfig = {} as ProjectConfig;
  projCfg = deepMerge(projectSetting, projCfg || {});
  try {
    console.log('Application configuration');
    // if (themeColor && themeColor !== primaryColor) {
    //   changeTheme(themeColor);
    // }

    // grayMode && updateGrayMode(grayMode);
    // colorWeak && updateColorWeak(colorWeak);
  } catch (error) {
    console.log(error);
  }
  appStore.setProjectConfig(projCfg);

  // // init dark mode
  // updateDarkTheme(darkMode);
  // if (darkMode === ThemeEnum.DARK) {
  //   updateHeaderBgColor();
  //   updateSidebarBgColor();
  // } else {
  //   headerBgColor && updateHeaderBgColor(headerBgColor);
  //   bgColor && updateSidebarBgColor(bgColor);
  // }
  // // init store
  // localeStore.initLocale();

  // setTimeout(() => {
  //   clearObsoleteStorage();
  // }, 16);
}
