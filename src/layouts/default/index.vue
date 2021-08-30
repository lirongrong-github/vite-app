<script lang="ts" setup>
  import { Layout } from 'ant-design-vue';

  // import LayoutHeader from './header/index.vue';
  import LayoutSideBar from './sider/index.vue';
  import LayoutContent from './content/index.vue';

  import LayoutMultipleHeader from './header/MultipleHeader.vue';

  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('default-layout');
</script>

<template>
  <Layout :class="prefixCls">
    <!-- <LayoutHeader /> -->
    <Layout>
      <LayoutSideBar />
      <Layout :class="`${prefixCls}-main`">
        <LayoutMultipleHeader />
        <LayoutContent />
        <!-- <LayoutFooter /> -->
      </Layout>
    </Layout>
  </Layout>
</template>

<style lang="less">
  @prefix-cls: ~'@{namespace}-default-layout';
  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: @content-bg;
    flex-direction: column;

    > .ant-layout {
      min-height: 100%;
    }

    &-main {
      width: 100%;
      // margin-left: 1px;
    }
  }
</style>
