<script lang="ts" setup>
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('page-footer');
</script>
<template>
  <section :class="prefixCls">
    <slot />
  </section>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-page-footer';

  .@{prefix-cls} {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    // width: 100%;
    width: calc(100% - 210px);
    align-items: center;
    padding: 0 24px;
    line-height: 44px;
    background-color: #fff;
    box-shadow: 0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05),
      0 -12px 48px 16px rgba(0, 0, 0, 0.03);
    transition: width 0.2s;

    &__left {
      flex: 1 1;
    }
  }
</style>
