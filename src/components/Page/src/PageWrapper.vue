<template>
  <section ref="wrapperRef" :class="getClass">
    <PageHeader
      :ghost="ghost"
      :title="title"
      v-bind="omit($attrs, 'class')"
      ref="headerRef"
      v-if="content || $slots.headerContent || title || getHeaderSlots.length"
    >
      <template #default>
        <template v-if="content">
          {{ content }}
        </template>
        <slot name="headerContent" v-else />
      </template>
      <template #[item]="data" v-for="item in getHeaderSlots">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </PageHeader>
    <section class="overflow-hidden" style="margin: 16px" ref="contentRef">
      <slot></slot>
    </section>
    <PageFooter v-if="getShowFooter" ref="footerRef">
      <template #left>
        <slot name="leftFooter"></slot>
      </template>
      <template #right>
        <slot name="rightFooter"></slot>
      </template>
    </PageFooter>
  </section>
</template>
<script lang="ts">
  import { defineComponent, computed, PropType } from 'vue';
  import { PageHeader } from 'ant-design-vue';
  import { omit } from 'lodash-es';

  import { useDesign } from '/@/hooks/web/useDesign';

  import PageFooter from './PageFooter.vue';

  export default defineComponent({
    name: 'PageWrapper',
    components: { PageHeader, PageFooter },
    inheritAttrs: false,
    props: {
      ghost: {
        type: Boolean as PropType<boolean>,
      },
      title: {
        type: String as PropType<string>,
      },
      content: {
        type: String as PropType<string>,
      },
    },
    setup(_, { slots, attrs }) {
      const { prefixCls } = useDesign('page-wrapper');

      const getHeaderSlots = computed(() => {
        return Object.keys(omit(slots, 'default', 'leftFooter', 'rightFooter', 'headerContent'));
      });

      const getShowFooter = computed(() => slots?.leftFooter || slots?.rightFooter);

      const getClass = computed(() => {
        return [
          prefixCls,
          {
            // [`${prefixCls}--dense`]: true,
            // aa: true
          },
          attrs.class ?? {},
        ];
      });

      return { omit, getHeaderSlots, getClass, getShowFooter };
    },
  });
</script>
