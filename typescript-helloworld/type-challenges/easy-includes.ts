/*
 * @Author       : liconghui conghui.li@shengyc.com
 * @Date         : 2022-09-23 16:20:47
 * @LastEditors  : liconghui conghui.li@shengyc.com
 * @LastEditTime : 2022-09-23 16:24:21
 */
type Includes<T extends unknown[], E> = T extends [E] ? E : never;
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // expected to be `false`
