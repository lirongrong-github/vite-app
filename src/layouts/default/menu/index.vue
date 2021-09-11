<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';

  import { Menu } from 'ant-design-vue';

  import { AppstoreAddOutlined, UserOutlined } from '@ant-design/icons-vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  export default defineComponent({
    components: {
      Menu,
      MenuItem: Menu.Item,
      SubMenu: Menu.SubMenu,
      AppstoreAddOutlined,
      UserOutlined,
    },
    setup() {
      const { prefixCls } = useDesign('menu');
      const router = useRouter();

      const selectedKeys = ref<string[]>(['1-1']);
      const openKeys = ref<string[]>(['1']);
      const onMenuClick = (path: string): void => {
        router.push(path);
      };
      const onOpenChange = (_openKeys: string[]) => {
        openKeys.value = _openKeys.length ? [_openKeys[_openKeys.length - 1]] : [];
      };
      const onSelect = ({ keyPath, selectedKeys: _selectedKeys }: any) => {
        openKeys.value = keyPath;
        selectedKeys.value = _selectedKeys;
      };
      return {
        selectedKeys,
        openKeys,
        onMenuClick,
        prefixCls,
        onOpenChange,
        onSelect,
      };
    },
  });
</script>
<template>
  <section :class="prefixCls">
    <Menu
      theme="dark"
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
      @openChange="onOpenChange"
      @select="onSelect"
    >
      <SubMenu key="1">
        <template #title>
          <span>
            <AppstoreAddOutlined />
            <span>Dashboard</span>
          </span>
        </template>
        <MenuItem key="1-1" @click="onMenuClick('/')">分析页</MenuItem>
        <MenuItem key="1-2" @click="onMenuClick('/dashboard/workbench')">工作台</MenuItem>
      </SubMenu>
      <SubMenu key="2">
        <template #title>
          <span>
            <UserOutlined />
            <span>功能</span>
          </span>
        </template>
        <MenuItem key="2-1" @click="onMenuClick('/feat')">ClickOutSide组件</MenuItem>
        <MenuItem key="2-2" @click="onMenuClick('/feat/ws')">websocket测试</MenuItem>
      </SubMenu>
      <SubMenu key="3">
        <template #title>
          <span>
            <AppstoreAddOutlined />
            <span>组件</span>
          </span>
        </template>
        <MenuItem key="3-1" @click="onMenuClick('/comp')">Button</MenuItem>
      </SubMenu>
      <MenuItem key="4" @click="onMenuClick('/feat')">
        <template #icon>
          <AppstoreAddOutlined />
        </template>
        <span>Test</span>
      </MenuItem>
    </Menu>
  </section>
</template>

<style lang="less">
  .ant-menu {
    .ant-menu-item {
      margin: 0 !important;
    }
  }

  .ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background: #0c2135;
  }

  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: #0960bd;
  }
</style>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-menu';

  .@{prefix-cls} {
    height: calc(100% - @header-height);
    background: #001529;
    z-index: 200;
    overflow-x: hidden;
    overflow-y: overlay;

    &::-webkit-scrollbar-thumb:hover {
      background: #485461;
    }
  }
</style>
