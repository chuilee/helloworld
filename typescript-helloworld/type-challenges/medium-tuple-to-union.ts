/*
 * @Author       : liconghui conghui.li@shengyc.com
 * @Date         : 2022-09-27 11:22:45
 * @LastEditors  : liconghui conghui.li@shengyc.com
 * @LastEditTime : 2022-09-27 11:31:16
 */
/* _____________ Your Code Here _____________ */
// type TupleToUnion<T extends unknown[]> = T extends Array<infer P> ? P : never;
type TupleToUnion<T extends unknown[]> = T[number];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];

type Arr = ['1', '2', '3'];
type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
