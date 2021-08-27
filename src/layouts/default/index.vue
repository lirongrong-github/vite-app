<template>
  <section :class="prefixCls">
    <!-- <h1>Layout_Default</h1>
    <RouterView /> -->
    <section :class="`${prefixCls}__aside`" />
    <aside class="ls-default-layout__aside--fixed"> aside </aside>
    <section class="ls-default-layout__main layout_main">
      <section class="layout_main__header" />
      <section class="layout_main__header--fixed"> header </section>
      <section class="layout_main__content">
        <RouterView />
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
  // import { useAppInject } from '/@/hooks/web/useAppInject';
  // const { getIsMobile } = useAppInject();
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('default-layout');
</script>

<style lang="less">
  @namespace: ls;
  @prefix-cls: ~'@{namespace}-default-layout';
  .@{prefix-cls} {
    display: flex;
    flex: auto;
    flex-direction: row;
    min-height: 100%;
    background: #f0f2f5;
    &__aside {
      width: 210px;
      overflow: hidden;
      flex: 0 0 210px;
      max-width: 210px;
      min-width: 210px;
      transition: all 0.2s ease 0s;
    }
    &__aside--fixed {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      background: #0c2135;
      color: #b7bdc3;
      width: 210px;
    }
    &__main {
      display: flex;
      flex-direction: column;
      width: calc(100% - 210px);
    }
    .layout_main {
      &__header {
        height: 80px;
      }
      &__header--fixed {
        position: fixed;
        top: 0;
        z-index: 505;
        // width: 100%;
        width: calc(100% - 210px);
        transition: width 0.2s;
        flex: 0 0 auto;
        height: 80px;
        background: #fff;
        border-bottom: 1px solid #d9d9d9;
      }
      &__content {
        position: relative;
        flex: 1 1 auto;
        min-height: 0;
      }
    }
  }
</style>
