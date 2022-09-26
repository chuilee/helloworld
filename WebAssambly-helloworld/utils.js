/*
 * @Author       : conghui li conghui.li@shengyc.com
 * @Date         : 2022-09-26 14:35:36
 * @LastEditors  : conghui li conghui.li@shengyc.com
 * @LastEditTime : 2022-09-26 15:59:43
 */
const fetchAndInstantiate = function (url, importObject) {
  return fetch(url)
    .then(response => {
      return response.arrayBuffer();
    })
    .then(bytes => {
      return WebAssembly.instantiate(bytes, importObject);
    })
    .then(results => {
      return results.instance;
    });
};
export { fetchAndInstantiate };
export default {
  fetchAndInstantiate,
};
