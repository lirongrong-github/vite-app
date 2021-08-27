<script lang="ts" setup>
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { Button as aButton } from 'ant-design-vue';
</script>
<template>
  <section> dashboard </section>
  <a-button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button type="primary" shape="circle">A</a-button>
  <a-button type="primary">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button>
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button>
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button type="dashed" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button type="dashed">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
</template>
