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
  ],
};

export default comp;
