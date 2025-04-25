import { createStore } from "vuex";

export const store = createStore({
  state: {
    taskIsActive: 0,
  },
  mutations: {
    SET_ACTIVE_TASKS(state, count) {
      state.taskIsActive = count;
    },
  },
  getters: {
    taskIsActive: (state) => state.taskIsActive,
  },
});
