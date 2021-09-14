import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const feat: AppRouteModule = {
  path: '/feat',
  name: 'Feat',
  redirect: '/feat/click-out-side',
  meta: {
    orderNo: 19,
    title: '功能',
  },
  component: LAYOUT,
  children: [
    {
      path: '/feat/click-out-side',
      name: 'ClickOutSide',
      meta: {
        title: 'ClickOutside组件',
      },
      component: () => import('/@/views/demo/feat/click-out-side/index.vue'),
    },
    {
      path: '/feat/ws',
      name: 'Ws',
      meta: {
        title: 'websocket测试',
      },
      component: () => import('/@/views/demo/feat/ws/index.vue'),
    },
  ],
};

export default feat;
