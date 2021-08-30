<script lang="ts" setup>
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('layout-content');
</script>

<template>
  <section :class="prefixCls">
    <RouterView />
  </section>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-content';

  .@{prefix-cls} {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
  }
</style>
