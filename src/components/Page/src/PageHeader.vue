<script lang="ts" setup>
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('page-header');
  defineProps({
    title: { type: String, default: '' },
  });
</script>
<template>
  <section :class="prefixCls">
    <span :class="`${prefixCls}__title`"> {{ title }} </span>
  </section>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-page-header';

  .@{prefix-cls} {
    box-sizing: border-box;
    margin: 0;
    color: #000000d9;
    font-size: 14px;
    line-height: 1.5715;
    list-style: none;
    position: relative;
    padding: 16px 24px;
    background-color: #fff;

    &__title {
      margin-right: 12px;
      margin-bottom: 0;
      color: #000000d9;
      font-weight: 600;
      font-size: 20px;
      line-height: 32px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
