export const combinAttrs = (props: Record<string, unknown>, attrs: Record<string, unknown>) => {
  return Object.assign(props, attrs);
};
