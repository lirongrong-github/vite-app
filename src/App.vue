<template>
  <RouterView />
</template>
<script lang="ts">
  // import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    components: {
      // UserOutlined,
      // VideoCameraOutlined,
      // UploadOutlined,
    },
    setup() {
      const onCollapse = (collapsed: boolean, type: string) => {
        console.log(collapsed, type);
      };

      const onBreakpoint = (broken: boolean) => {
        console.log(broken);
      };

      return {
        selectedKeys: ref<string[]>(['4']),
        onCollapse,
        onBreakpoint,
      };
    },
  });
</script>
<style>
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .site-layout-sub-header-background {
    background: #fff;
  }

  .site-layout-background {
    background: #fff;
  }

  [data-theme='dark'] .site-layout-sub-header-background {
    background: #141414;
  }
</style>
