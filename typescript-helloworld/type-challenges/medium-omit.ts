/*
 * @Author       : conghui li conghui.li@shengyc.com
 * @Date         : 2022-09-27 10:16:10
 * @LastEditors  : conghui li conghui.li@shengyc.com
 * @LastEditTime : 2022-09-27 10:33:15
 */
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }
// type MyOmit<T, K extends string | boolean | symbol> = { [P in Exclude<keyof T, K>]: T[P] };
// type TodoPreviewOmit = MyOmit<Todo, 'description' | 'title'>;

// const todo: TodoPreviewOmit = {
//   completed: false,
// };

/* _____________ Your Code Here _____________ */

type MyOmit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P] };

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
];

type error = MyOmit<Todo, 'description' | 'invalid'>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}
