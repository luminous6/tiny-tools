/**
 * 函数防抖
 */
export const debounce = (fn, wait = 500) => {
  let timer;
  return () => {
    const arg = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, wait);
  };
};
