import type { Router } from 'vue-router';

import { PAGE_NOT_FOUND_NAME } from '/@/router/constant';
import { usePermissionStoreWithOut } from '/@/store/modules/permission';

export function createPermissionGuard(router: Router) {
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach((to, from, next) => {
    if (permissionStore.getIsDynamicAddedRoute) {
      next();
      return;
    }

    router.addRoute({
      name: 'About',
      path: '/about',
      component: () => import('/@/views/demo/feat/ws/index.vue'),
    });

    permissionStore.setDynamicAddedRoute(true);

    if (to.name === PAGE_NOT_FOUND_NAME) {
      // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
      next({ path: to.fullPath, replace: true, query: to.query });
    } else {
      // const redirectPath = (from.query.redirect || to.path) as string;
      // const redirect = decodeURIComponent(redirectPath);
      // const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
      // next(nextData);
      next();
    }
    // next();
  });
}
