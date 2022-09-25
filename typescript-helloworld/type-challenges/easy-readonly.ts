/*
 * @Author       : liconghui conghui.li@shengyc.com
 * @Date         : 2022-09-23 10:10:40
 * @LastEditors  : liconghui conghui.li@shengyc.com
 * @LastEditTime : 2022-09-23 10:13:25
 */
/* _____________ Your Code Here _____________ */

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
