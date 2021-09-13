import { defineComponent, ref, toRefs } from 'vue';
import { createBreakpointListen } from '/@/hooks/event/useBreakpoint';
import { createAppProviderContext } from './useAppContext';
import { prefixCls } from '/@/settings/designSetting';

const props = {
  /**
   * class style prefix
   */
  prefixCls: { type: String, default: prefixCls },
};

export default defineComponent({
  props,
  setup(props, { slots }) {
    const isMobile = ref<boolean>(false);
    createBreakpointListen(({ screenMap, sizeEnum, width }) => {
      const lgWidth = screenMap.get(sizeEnum.LG);
      if (lgWidth) {
        isMobile.value = width.value - 1 < lgWidth;
      }
    });

    const { prefixCls } = toRefs(props);

    // Inject variables into the global
    createAppProviderContext({ prefixCls, isMobile });

    return () => slots.default?.();
  },
});
