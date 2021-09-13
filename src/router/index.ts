// import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import { EXCEPTION_COMPONENT, PAGE_NOT_FOUND_NAME } from '/@/router/constant';

import { LAYOUT } from './constant';

// app router
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      redirect: '/dashboard/analysis',
      component: LAYOUT,
      children: [
        {
          path: '/dashboard/analysis',
          name: 'Analysis',
          component: () => import('/@/views/dashboard/analysis/index.vue'),
        },
        {
          path: '/dashboard/workbench',
          name: 'Workbench',
          component: () => import('/@/views/dashboard/workbench/index.vue'),
        },
      ],
    },
    {
      path: '/sys',
      name: 'Sys',
      component: () => import('/@/views/sys/index.vue'),
    },
    {
      path: '/feat',
      name: 'Feat',
      redirect: '/feat/click-out-side',
      component: LAYOUT,
      children: [
        {
          path: '/feat/click-out-side',
          name: 'ClickOutSide',
          component: () => import('/@/views/demo/feat/click-out-side/index.vue'),
        },
        {
          path: '/feat/ws',
          name: 'Ws',
          component: () => import('/@/views/demo/feat/ws/index.vue'),
        },
      ],
    },
    {
      path: '/comp',
      name: 'Comp',
      component: LAYOUT,
      redirect: '/comp/button',
      children: [
        {
          path: '/comp/button',
          name: 'Button',
          component: () => import('/@/views/demo/comp/button/index.vue'),
        },
      ],
    },
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: LAYOUT,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true,
      },
      children: [
        {
          path: '/:path(.*)*',
          name: PAGE_NOT_FOUND_NAME,
          component: EXCEPTION_COMPONENT,
          meta: {
            title: 'ErrorPage',
            hideBreadcrumb: true,
            hideMenu: true,
          },
        },
      ],
    },
  ],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
