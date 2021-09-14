import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const comp: AppRouteModule = {
  path: '/comp',
  name: 'Comp',
  component: LAYOUT,
  redirect: '/comp/button',
  meta: {
    orderNo: 30,
    title: '组件',
  },
  children: [
    {
      path: '/comp/button',
      name: 'Button',
      meta: {
        title: '基础组件',
      },
      component: () => import('/@/views/demo/comp/button/index.vue'),
    },
    {
      path: '/comp/full-screen',
      name: 'FullScreen',
      meta: {
        title: '全屏',
      },
      component: () => import('/@/views/demo/comp/full-screen/index.vue'),
    },
    {
      path: '/comp/count-to',
      name: 'countTo',
      meta: {
        title: '数字动画',
      },
      component: () => import('/@/views/demo/comp/count-to/index.vue'),
    },
  ],
};

export default comp;
