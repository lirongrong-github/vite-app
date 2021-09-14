<script lang="ts" setup>
  import { ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { CollapseCard } from '/@/components/CollapseCard';
  import { useFullscreen } from '@vueuse/core';
  const { enter, toggle, exit, isFullscreen } = useFullscreen();
  const domRef = ref<Nullable<HTMLElement>>(null);
  const { toggle: toggleDom } = useFullscreen(domRef);
</script>
<template>
  <PageWrapper title="全屏示例">
    <CollapseCard class="w-full h-32 bg-white rounded-md" title="Window Full Screen">
      <a-button type="primary" @click="enter" class="mr-2"> Enter Window Full Screen </a-button>
      <a-button color="success" @click="toggle" class="mr-2"> Toggle Window Full Screen </a-button>

      <a-button color="error" @click="exit" class="mr-2"> Exit Window Full Screen </a-button>

      Current State: {{ isFullscreen }}
    </CollapseCard>

    <CollapseCard class="w-full mt-5 bg-white rounded-md" title="Dom Full Screen">
      <a-button type="primary" @click="toggleDom" class="mr-2"> Toggle Dom Full Screen </a-button>
    </CollapseCard>

    <div
      ref="domRef"
      class="flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"
    >
      <a-button type="primary" @click="toggleDom" class="mr-2"> Toggle Dom Full Screen </a-button>
    </div>
  </PageWrapper>
</template>
