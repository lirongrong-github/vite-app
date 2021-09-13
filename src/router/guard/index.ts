import type { Router } from 'vue-router';

import { createPermissionGuard } from './permissionGuard';

// Don't change the order of creation
export function setupRouterGuard(router: Router) {
  /* createPageGuard(router);
  createPageLoadingGuard(router);
  createHttpGuard(router);
  createScrollGuard(router);
  createMessageGuard(router);
  createProgressGuard(router); */
  createPermissionGuard(router);
  /* createParamMenuGuard(router); // must after createPermissionGuard (menu has been built.)
  createStateGuard(router); */
}
