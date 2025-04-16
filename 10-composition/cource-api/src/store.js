import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      appTitle: "This is Vuex + Composition",
    };
  },
  getters: {
    appTitle(state) {
      return state.appTitle.trim();
    },
  },
});
