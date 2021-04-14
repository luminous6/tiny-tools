/**
 * 判断数据类型
 * @param {*} val 
 * @return date | array | object | string | boolean
 */
export const typeOf = (val) => {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
};
