<script lang="ts" setup>
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('layout-multiple-header');
</script>

<template>
  <section :class="prefixCls">
    <section :class="`${prefixCls}--placeholder`" />
    <section :class="`${prefixCls}--fixed`"> MultipleHeader </section>
  </section>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-multiple-header';

  .@{prefix-cls} {
    // min-height: 80px;
    // background: #fff;
    // border-bottom: 1px solid #d9d9d9;
    &--placeholder {
      height: 80px;
    }

    &--fixed {
      position: fixed;
      top: 0;
      z-index: 505;
      width: 100%;
      // width: calc(100% - 210px);
      transition: width 0.2s;
      flex: 0 0 auto;
      height: 80px;
      background: #fff;
      border-bottom: 1px solid #d9d9d9;
    }
  }
</style>
