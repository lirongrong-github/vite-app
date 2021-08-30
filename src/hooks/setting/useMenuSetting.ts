import { computed } from 'vue';

import { useAppStore } from '/@/store/modules/app';

export function useMenuSetting() {
  const appStore = useAppStore();

  const getMenuWidth = computed(() => appStore.getMenuSetting.menuWidth);

  return {
    getMenuWidth,
  };
}
