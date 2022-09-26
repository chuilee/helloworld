/*
 * @Author       : conghui li conghui.li@shengyc.com
 * @Date         : 2022-09-26 17:31:24
 * @LastEditors  : conghui li conghui.li@shengyc.com
 * @LastEditTime : 2022-09-26 17:31:24
 */
const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  mode: 'development',
};
