<script lang="ts" setup>
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('layout-multiple-header');
</script>

<template>
  <section :class="prefixCls"> MultipleHeader </section>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-multiple-header';

  .@{prefix-cls} {
    min-height: 80px;
    background: #fff;
    border-bottom: 1px solid #d9d9d9;
  }
</style>
