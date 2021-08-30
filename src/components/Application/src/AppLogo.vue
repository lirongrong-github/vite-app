<!--
 * @Author: ls
 * @Description: logo component
-->
<script lang="ts" setup>
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('app-logo');
</script>
<template>
  <section :class="prefixCls">
    <img src="../../../assets/images/logo.png" />
    <section class="ml-2 truncate md:opacity-100"> Ls Admin </section>
  </section>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls} {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    height: @header-height;

    > img {
      width: 32px;
      height: 32px;
    }

    > section {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      transition: all 0.5s;
    }
  }
</style>
