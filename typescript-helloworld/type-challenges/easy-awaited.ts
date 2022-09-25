/*
 * @Author       : liconghui conghui.li@shengyc.com
 * @Date         : 2022-09-23 11:44:58
 * @LastEditors  : liconghui conghui.li@shengyc.com
 * @LastEditTime : 2022-09-23 15:11:15
 */
type ExampleType = Promise<string>;
type MyAwaited<T> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : T;
type ResultAwait = MyAwaited<ExampleType>; // string

type error = MyAwaited<number>;
