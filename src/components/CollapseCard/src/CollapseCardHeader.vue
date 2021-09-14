<script lang="ts" setup>
  import { PropType } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('collapse-card-header');
  import { UpOutlined } from '@ant-design/icons-vue';
  defineProps({
    show: {
      type: Boolean as PropType<boolean>,
    },
    title: {
      type: String as PropType<string>,
    },
  });
  defineEmits(['expand']);
</script>

<template>
  <section :class="prefixCls">
    <section :class="`${prefixCls}__title`">
      <template v-if="title">
        {{ title }}
      </template>
      <template v-else>
        <slot name="title"></slot>
      </template>
    </section>
    <section :class="`${prefixCls}__action`" @click="$emit('expand')">
      <slot name="action" />
      <UpOutlined
        :style="{
          transform: show ? 'rotate(0deg)' : 'rotate(180deg)',
          transition: 'all 0.3s ease-in',
          cursor: 'pointer',
        }"
      />
    </section>
  </section>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-collapse-card-header';

  .@{prefix-cls} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      position: relative;
      display: flex;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
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
