<template>
  <Button v-bind="getBindValue" :class="getButtonClass">
    <template #default>
      <!-- <Icon :icon="preIcon" v-if="preIcon" :size="iconSize" /> -->
      <slot></slot>
      <!-- <Icon :icon="postIcon" v-if="postIcon" :size="iconSize" /> -->
    </template>
  </Button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AButton',
    inheritAttrs: false,
  });
</script>
<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { Button } from 'ant-design-vue';
  const props = defineProps({
    color: {
      type: String,
      validator: (v: string) => ['error', 'warning', 'success', ''].includes(v),
    },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    /**
     * Text before icon.
     */
    preIcon: { type: String },
    /**
     * Text after icon.
     */
    postIcon: { type: String },
    /**
     * preIcon and postIcon icon size.
     * @default: 14
     */
    iconSize: { type: Number, default: 14 },
    onClick: { type: Function as PropType<(...args) => any>, default: null },
  });
  // import Icon from '/@/components/Icon/src/Icon.vue';
  // // import { buttonProps } from './props';
  import { useAttrs } from '/@/hooks/core/useAttrs';

  const attrs = useAttrs({ excludeDefaultKeys: false });

  // const props = defineProps(buttonProps);
  // // get component class
  // const attrs = useAttrs({ excludeDefaultKeys: false });
  const getButtonClass = computed(() => {
    const { color, disabled } = props;
    return [
      {
        [`ant-btn-${color}`]: !!color,
        [`is-disabled`]: disabled,
      },
    ];
  });

  // // get inherit binding value
  const getBindValue = computed(() => ({ ...unref(attrs), ...props }));
</script>
