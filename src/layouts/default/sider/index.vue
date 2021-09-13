<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { useAppInject } from '/@/hooks/web/useAppInject';

  import Sider from './LayoutSider.vue';
  import { Drawer } from 'ant-design-vue';

  export default defineComponent({
    components: { Sider, Drawer },
    setup() {
      const { getIsMobile } = useAppInject();

      const visible = ref<boolean>(true);

      const onClose = () => {
        visible.value = false;
      };

      watch(
        () => getIsMobile.value,
        (_visible: boolean) => {
          // console.log(_visible);
          if (_visible) {
            visible.value = true;
          }
        }
      );

      return {
        getIsMobile,
        visible,
        onClose,
      };
    },
  });
</script>
<template>
  <Drawer width="210" v-if="getIsMobile" placement="left" :visible="visible" @close="onClose">
    <Sider />
  </Drawer>
  <Sider v-else />
</template>
