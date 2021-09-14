import type { AppRouteRecordRaw } from '/@/router/types';

import { defineStore } from 'pinia';
import { store } from '/@/store';
import { asyncRoutes } from '/@/router/routes';

interface PermissionState {
  // Whether the route has been dynamically added
  isDynamicAddedRoute: boolean;
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    // Whether the route has been dynamically added
    isDynamicAddedRoute: false,
  }),
  getters: {
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    },
  },
  actions: {
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added;
    },
    buildRoutesAction(): AppRouteRecordRaw[] {
      return asyncRoutes;
    },
  },
});

// Need to be used outside the setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
