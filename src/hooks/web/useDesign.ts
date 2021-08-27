export function useDesign(scope: string) {
  const prefixCls = 'ls';

  return {
    prefixCls: `${prefixCls}-${scope}`,
    prefixVar: prefixCls,
  };
}
