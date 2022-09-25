/*
 * @Author       : liconghui conghui.li@shengyc.com
 * @Date         : 2022-09-23 09:46:30
 * @LastEditors  : liconghui conghui.li@shengyc.com
 * @LastEditTime : 2022-09-23 10:14:36
 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = { [key in K]: T[key] };

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

type TodoPreview1 = MyPick<Todo, 'title'>;

const todo1: TodoPreview = {
  title: '',
  completed: false,
};
