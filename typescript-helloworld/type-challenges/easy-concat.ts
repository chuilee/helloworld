/*
 * @Author       : liconghui conghui.li@shengyc.com
 * @Date         : 2022-09-23 15:06:45
 * @LastEditors  : liconghui conghui.li@shengyc.com
 * @LastEditTime : 2022-09-23 16:19:25
 */
type Concat<T extends unknown[], P extends unknown[]> = [...T, ...P];
type ConcatResult = Concat<[1, 2], [2]>; // expected to be [1, 2]
