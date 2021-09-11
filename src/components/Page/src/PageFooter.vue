<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}__left`">
      <slot name="left"></slot>
    </div>
    <slot></slot>
    <div :class="`${prefixCls}__right`">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  export default defineComponent({
    name: 'PageFooter',
    inheritAttrs: false,
    setup() {
      const { prefixCls } = useDesign('page-footer');
      return { prefixCls };
    },
  });
</script>
<style lang="less" scoped>
  // @prefix-cls: ~'@{namespace}-page-footer';
  // @prefix-cls: 'ls-page-footer';

  .ls-page-footer {
    position: fixed;
    right: 0;
    bottom: 0;
    // z-index: @page-footer-z-index;
    z-index: 999;
    display: flex;
    // width: 100%;
    width: calc(100% - 210px);
    align-items: center;
    padding: 0 24px;
    line-height: 44px;
    background-color: #fff;
    border-top: 1px solid #e2dadaa6;
    box-shadow: 0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05),
      0 -12px 48px 16px rgba(0, 0, 0, 0.03);
    transition: width 0.2s;

    &__left {
      flex: 1 1;
    }
  }
</style>
