<script lang="ts" setup>
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('layout-content');
</script>

<template>
  <section :class="prefixCls">
    <!-- <transition name="fade-slide" mode="out-in">
      <RouterView />
    </transition> -->
    <RouterView>
      <template #default="{ Component, route }">
        <transition name="fade-slide" mode="out-in" appear>
          <!-- <keep-alive v-if="openCache" :include="getCaches">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
          <component v-else :is="Component" :key="route.fullPath" /> -->
          <!-- {{ route }} -->
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </template>
    </RouterView>
  </section>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-content';

  .@{prefix-cls} {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
  }
</style>
