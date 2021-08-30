<script lang="ts">
  import { defineComponent } from 'vue-demi';
  import { Layout } from 'ant-design-vue';
  import LayoutMenu from '../menu/index.vue';

  export default defineComponent({
    components: {
      Sider: Layout.Sider,
      LayoutMenu,
    },
  });
</script>
<script lang="ts" setup>
  import { computed } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';

  const { prefixCls } = useDesign('layout-sideBar');
  const { getMenuWidth } = useMenuSetting();

  const getSiderClass = computed(() => {
    return [
      prefixCls,
      {
        [`${prefixCls}--fixed`]: true,
        [`${prefixCls}--mix`]: true,
      },
    ];
  });
</script>
<template>
  <Sider :width="getMenuWidth" :class="getSiderClass">
    <LayoutMenu />
  </Sider>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-sideBar';

  .@{prefix-cls} {
    z-index: 200;

    &--mix {
      min-height: calc(100% - @header-height);
    }
  }
</style>
