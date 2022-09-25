/*
 * @Author       : liconghui conghui.li@shengyc.com
 * @Date         : 2022-09-23 11:28:12
 * @LastEditors  : liconghui conghui.li@shengyc.com
 * @LastEditTime : 2022-09-23 11:33:46
 */
/* _____________ Your Code Here _____________ */

type Length<T extends readonly unknown[]> = T['length'];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>
];
