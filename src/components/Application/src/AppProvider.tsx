import { defineComponent, ref } from 'vue';
import { createBreakpointListen } from '/@/hooks/event/useBreakpoint';

export default defineComponent({
  setup(_, { slots }) {
    const isMobile = ref<boolean>(false);
    createBreakpointListen(({ screenMap, sizeEnum, width }) => {
      const lgWidth = screenMap.get(sizeEnum.LG);
      if (lgWidth) {
        isMobile.value = width.value - 1 < lgWidth;
      }
      console.log(isMobile.value);
    });
    return () => slots.default?.();
  },
});
