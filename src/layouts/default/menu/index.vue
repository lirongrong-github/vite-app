<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';

  import { Menu } from 'ant-design-vue';

  import { AppstoreAddOutlined, UserOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    components: {
      Menu,
      MenuItem: Menu.Item,
      SubMenu: Menu.SubMenu,
      AppstoreAddOutlined,
      UserOutlined,
    },
    setup() {
      const router = useRouter();

      const selectedKeys = ref<string[]>(['1-1']);
      const openKeys = ref<string[]>(['1']);
      const onMenuClick = (path: string): void => {
        router.push(path);
      };
      return {
        selectedKeys,
        openKeys,
        onMenuClick,
      };
    },
  });
</script>
<template>
  <Menu theme="dark" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline">
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
  </Menu>
</template>
