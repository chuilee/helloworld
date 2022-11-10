import { defineStore } from 'pinia';

export const useUserStore = defineStore('useUser', {
  // other options...
  state: () => {
    return { count: 0, name: 'Eduardo' };
  },
  getters: {
    doubleCount: state => {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count += 1;
    },
  },
});
