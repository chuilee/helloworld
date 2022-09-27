/*
 * @Author       : conghui li conghui.li@shengyc.com
 * @Date         : 2022-09-27 09:40:54
 * @LastEditors  : conghui li conghui.li@shengyc.com
 * @LastEditTime : 2022-09-27 10:02:35
 */
// const foo = (arg1: string, arg2: number): void => {}
// type MyParameters<T> = T extends (...args: infer R) => unknown ? R : never;
// type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

// type MyParameters<T extends (...args: any[]) => any> = any
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => unknown
  ? R
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];
