// import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

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
      component: () => import('/@/views/dashboard/index.vue'),
    },
    {
      path: '/sys',
      name: 'Sys',
      component: () => import('/@/views/sys/index.vue'),
    },
    {
      path: '/feat',
      name: 'Feat',
      component: LAYOUT,
      redirect: '/feat/click-out-side',
      children: [
        {
          path: '/feat/click-out-side',
          name: 'ClickOutSide',
          component: () => import('/@/views/demo/feat/click-out-side/index.vue'),
        },
      ],
    },
    /* {
      path: '/comp',
      name: 'Comp',
      component: LAYOUT,
      redirect: '/comp/transition',
      children: [
        {
          path: '/comp/transition',
          name: 'Transition',
          component: () => import('/@/views/demo/comp/transition/index.vue'),
        },
      ],
    }, */
  ],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
