/*
 * @Author       : conghui li conghui.li@shengyc.com
 * @Date         : 2022-09-27 09:39:15
 * @LastEditors  : conghui li conghui.li@shengyc.com
 * @LastEditTime : 2022-09-27 09:40:29
 */
// type Unshift<T extends unknown[], U> = [U, ...T];
// type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

type Unshift<T extends unknown[], U> = [U, ...T];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>
];
