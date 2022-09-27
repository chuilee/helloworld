/*
 * @Author       : conghui li conghui.li@shengyc.com
 * @Date         : 2022-09-27 10:03:59
 * @LastEditors  : conghui li conghui.li@shengyc.com
 * @LastEditTime : 2022-09-27 10:15:35
 */
// const fn = (v: boolean) => {
//   if (v) return 1;
//   return 2;
// };
// type MyReturnType<T extends (...args: any[]) => number> = T extends (...params: any[]) => infer R
//   ? R : never;
// type a = MyReturnType<typeof fn>; // should be "1 | 2"
/* _____________ Your Code Here _____________ */

type MyReturnType<T extends (...args: any[]) => unknown> = T extends (...params: any[]) => infer R
  ? R
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>
];

type ComplexObject = {
  a: [12, 'foo'];
  bar: 'hello';
  prev(): number;
};

const fn = (v: boolean) => {
  return v ? 1 : 2;
};
const fn1 = (v: boolean, w: any) => {
  return v ? 1 : 2;
};
