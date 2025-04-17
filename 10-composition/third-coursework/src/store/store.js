import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      numberisActive: 0,
    };
  },
  getters: {
    numberisActive(state) {
      return state.numberisActive;
    },
  },
});
