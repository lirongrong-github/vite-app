import '/@/design/index.less';

// Register windi
import 'virtual:windi.css';

import { createApp } from 'vue';
import App from './App.vue';
import { router, setupRouter } from '/@/router';
// import { setupStore } from '/@/store';

// Importing on demand in local development will increase the number of browser requests by around 20%.
// This may slow down the browser refresh speed.
// Therefore, only enable on-demand importing in production environments .
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  // setupStore(app);

  // Configure routing
  setupRouter(app);

  // Mount when the route is ready
  // https://next.router.vuejs.org/api/#isready
  await router.isReady();

  app.mount('#app', true);
}

void bootstrap();
