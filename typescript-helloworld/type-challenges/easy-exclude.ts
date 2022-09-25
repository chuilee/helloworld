/*
 * @Author       : liconghui conghui.li@shengyc.com
 * @Date         : 2022-09-23 11:37:22
 * @LastEditors  : liconghui conghui.li@shengyc.com
 * @LastEditTime : 2022-09-23 14:54:47
 */
// type MyExclude<T, U> = T extends U ? never : T;
// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U ? never : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>
];
