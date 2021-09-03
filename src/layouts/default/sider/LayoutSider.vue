<script lang="ts">
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import LayoutMenu from '../menu/index.vue';
  import { AppLogo } from '/@/components/Application';

  export default defineComponent({
    components: {
      Sider: Layout.Sider,
      LayoutMenu,
      AppLogo,
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
  <section :class="prefixCls">
    <section :class="`${prefixCls}--placeholder`" :style="{ width: `${getMenuWidth}px` }" />
    <Sider :width="getMenuWidth" :class="getSiderClass">
      <AppLogo />

      <LayoutMenu />
    </Sider>
  </section>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-sideBar';

  .@{prefix-cls} {
    z-index: 200;

    &--mix {
      min-height: calc(100% - @header-height);
    }

    &--placeholder {
      overflow: hidden;
      flex: 0 0 210px;
      max-width: 210px;
      min-width: 210px;
      transition: all 0.2s ease 0s;
      height: 100%;
    }

    &--fixed {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      background: #001529;
      color: #b7bdc3;
    }
  }
</style>
