/*
 * @Author       : liconghui conghui.li@shengyc.com
 * @Date         : 2022-09-23 10:17:27
 * @LastEditors  : liconghui conghui.li@shengyc.com
 * @LastEditTime : 2022-09-23 10:50:05
 */
/* _____________ Your Code Here _____________ */

type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, '2', 3, '4'] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>
];

type error = TupleToObject<[[1, 2], {}]>;
