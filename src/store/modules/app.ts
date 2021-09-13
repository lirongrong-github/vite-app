import type { ProjectConfig, MenuSetting } from '/#/config';

import { defineStore } from 'pinia';
import { store } from '/@/store';

import { deepMerge } from '/@/utils';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    projectConfig: localStorage.getItem('tets') as unknown as ProjectConfig,
  }),
  getters: {
    getProjectConfig(): ProjectConfig {
      return this.projectConfig || ({} as ProjectConfig);
    },
    getMenuSetting(): MenuSetting {
      return this.getProjectConfig.menuSetting;
    },
  },
  actions: {
    setProjectConfig(config: ProjectConfig): void {
      this.projectConfig = deepMerge(this.projectConfig || {}, config);
    },
  },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
