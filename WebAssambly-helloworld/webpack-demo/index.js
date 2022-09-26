/*
 * @Author       : conghui li conghui.li@shengyc.com
 * @Date         : 2022-09-26 17:31:44
 * @LastEditors  : conghui li conghui.li@shengyc.com
 * @LastEditTime : 2022-09-26 17:33:03
 */
const js = import('./node_modules/@chuilee/hello-wasm/hello_wasm.js');
js.then(js => {
  js.greet('WebAssembly');
});
