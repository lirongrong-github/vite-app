<script lang="ts" setup>
  import { ref } from 'vue';
  import { CollapseTransition } from '/@/components/Transition';
  import CollapseCardHeader from './CollapseCardHeader.vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('collapse-card');

  defineProps({
    title: { type: String, default: '' },
  });

  const show = ref<boolean>(true);
  function handleExpand() {
    show.value = !show.value;
  }
</script>
<template>
  <section :class="prefixCls">
    <section :class="[`${prefixCls}__header`, 'px-2']">
      <CollapseCardHeader v-bind="$props" :show="show" @expand="handleExpand">
        <template #title>
          <slot name="title"></slot>
        </template>
        <template #action>
          <slot name="action"></slot>
        </template>
      </CollapseCardHeader>
    </section>
    <section class="p-2">
      <CollapseTransition>
        <section :class="`${prefixCls}__body`" v-show="show">
          <slot />
        </section>
      </CollapseTransition>
    </section>
    <section :class="[`${prefixCls}__footer`, 'px-2']" v-if="$slots.footer">
      <slot name="footer"></slot>
    </section>
  </section>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-collapse-card';
  @border-color-light: #d9d9d9;
  @component-background: #fff;

  .@{prefix-cls} {
    background-color: @component-background;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;

    &__header {
      display: flex;
      height: 40px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid @border-color-light;
    }

    &__footer {
      display: flex;
      height: 40px;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid @border-color-light;
    }

    &__action {
      display: flex;
      text-align: right;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
    }
  }
</style>
