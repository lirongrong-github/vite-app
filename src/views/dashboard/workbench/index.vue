<script lang="ts" setup>
  import {
    SearchOutlined,
    RedoOutlined,
    DownOutlined,
    FullscreenOutlined,
  } from '@ant-design/icons-vue';
  import { Button as aButton } from 'ant-design-vue';
  import { Tabs } from 'ant-design-vue';
  const TabPane = Tabs.TabPane;
</script>
<template>
  <section>
    <section> dashboard </section>
    <Tabs type="editable-card" size="small" :animated="false" :hideAdd="true" :tabBarGutter="3">
      <template v-for="item in 16" :key="item">
        <TabPane>
          <template #tab>
            <!-- {{ item }} -->
            <span class="ls-multiple-tabs-content__info"> 仪表盘 {{ item }} </span>
            <!-- <TabContent :tabItem="item" /> -->
          </template>
        </TabPane>
      </template>

      <template #tabBarExtraContent>
        <section class="ls-tab__content">
          <RedoOutlined />
          <DownOutlined style="margin: 0 20px" />
          <FullscreenOutlined />
        </section>
      </template>
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
  </section>
</template>

<style lang="less">
  .ant-tabs.ant-tabs-card {
    .ant-tabs-card-bar {
      .ant-tabs-nav-container {
        display: flex;
        align-items: center;
      }

      .ant-tabs-tab {
        display: inline-flex;
        align-items: center;
        height: calc(30px - 2px);
        padding-right: 12px;
        line-height: calc(30px - 2px);
        border-radius: 2px;
        margin-left: 5px;
      }

      .ant-tabs-tab-active {
        position: relative;
        color: #fff !important;
        background: #0960bd;
        border: 1px solid #0960bd;
        transition: none;
      }

      .ls-multiple-tabs-content__info {
        font-size: 12px;
      }
    }

    .ls-tab__content {
      width: 108px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
