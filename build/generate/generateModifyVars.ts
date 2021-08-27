import { resolve } from 'path';

/**
 * less global variable
 */
export function generateModifyVars() {
  return {
    hack: `true; @import (reference) "${resolve('src/design/config.less')}";`,
    'success-color': '#55D187', //  Success color
    'error-color': '#ED6F6F', //  False color
    'warning-color': '#EFBD47', //   Warning color
    //'border-color-base': '#EEEEEE',
    'font-size-base': '14px', //  Main font size
    'border-radius-base': '2px', //  Component/float fillet
    // 'link-color': primary, //   Link color
    'app-content-background': '#fafafa', //   Link color
  };
}
