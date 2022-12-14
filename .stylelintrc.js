/*
 * @Author       : conghui li conghui.li@shengyc.com
 * @Date         : 2022-09-01 14:52:29
 * @LastEditors  : conghui li conghui.li@shengyc.com
 * @LastEditTime : 2022-09-27 09:02:39
 */
module.exports = {
  processors: [],
  plugins: [],
  extends: [
    'stylelint-config-html/html',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': null,
    'declaration-block-semicolon-space-before': 'never',
    'media-feature-name-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    // style calc中使用v-bind
    'function-calc-no-unspaced-operator': null,
  }, // 可以自己自定一些规则
};
