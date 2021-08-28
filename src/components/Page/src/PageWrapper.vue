<script lang="ts" setup>
  import PageHeader from './PageHeader.vue';
  // import PageFooter from './PageFooter.vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('page-wrapper');
  defineProps({
    title: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <section :class="prefixCls">
    <PageHeader :title="title" />
    <section class="overflow-hidden" :class="`${prefixCls}__content`">
      <slot />
    </section>
    <!-- <PageFooter> 123 </PageFooter> -->
  </section>
</template>

<style lang="less">
  @prefix-cls: ~'@{namespace}-page-wrapper';

  .@{prefix-cls} {
    position: relative;

    &__content {
      margin: 16px;
    }
  }
</style>
