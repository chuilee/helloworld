/*
 * @Author       : liconghui conghui.li@shengyc.com
 * @Date         : 2022-09-23 14:56:13
 * @LastEditors  : liconghui conghui.li@shengyc.com
 * @LastEditTime : 2022-09-23 15:04:13
 */
type If<C extends boolean, T, F> = C extends true ? T : F;
type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'
