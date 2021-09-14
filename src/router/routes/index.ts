import type { AppRouteModule } from '/@/router/types';
import { mainOutRoutes } from './mainOut';
import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE, Root_Route } from '/@/router/routes/basic';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = routeModuleList;

// Basic routing without permission
export const basicRoutes = [
  /* LoginRoute, */
  Root_Route,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
