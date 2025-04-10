import { createStore, createLogger } from "vuex";
import counterModule from "./modeles/counter";
export default createStore({
  plugins: [createLogger()],
  modules: {
    count: counterModule,
  },
  state() {
    return {
      appTitle: "Vuex Working!",
    };
  },
  getters: {
    toUpperCase(state) {
      return state.appTitle.toUpperCase();
    },
  },
});
