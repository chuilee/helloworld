/*
 * @Author       : conghui li conghui.li@shengyc.com
 * @Date         : 2022-09-27 09:34:26
 * @LastEditors  : conghui li conghui.li@shengyc.com
 * @LastEditTime : 2022-09-27 09:38:37
 */
// type Push<T extends unknown[], U> =  [...T, U];
// type Result = Push<[1, 2], '3'> // [1, 2, '3']

/* _____________ Your Code Here _____________ */

type Push<T extends unknown[], U> = [...T, U];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>
];
