<script lang="ts" setup>
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { Button as aButton } from 'ant-design-vue';
  import { Tabs } from 'ant-design-vue';
  const TabPane = Tabs.TabPane;
</script>
<template>
  <section> dashboard </section>
  <Tabs type="editable-card" size="small" :animated="false" :hideAdd="true" :tabBarGutter="3">
    <template v-for="item in 6" :key="item">
      <TabPane>
        <template #tab>
          {{ item }}
          <!-- <TabContent :tabItem="item" /> -->
        </template>
      </TabPane>
    </template>

    <template #tabBarExtraContent> right </template>
  </Tabs>
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

<style lang="less">
  .ant-tabs.ant-tabs-card {
    .ant-tabs-card-bar {
      .ant-tabs-tab {
        height: calc(30px - 2px);
        padding-right: 12px;
        line-height: calc(30px - 2px);
      }

      .ant-tabs-tab-active {
        position: relative;
        padding-left: 18px;
        color: #fff !important;
        background: #0960bd;
        border: 0;
        transition: none;
      }
    }
  }
</style>
