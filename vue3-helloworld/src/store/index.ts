/*
 * @Author: chuilee
 * @Date: 2022-09-01 20:36:05
 * @Last Modified by: chuilee
 * @Last Modified time: 2022-09-01 20:36:55
 */
import type { App } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';

export const setupStore = function (app: App<Element>) {
  const pinia = createPinia();
  pinia.use(piniaPersist);
  app.use(pinia);
};
