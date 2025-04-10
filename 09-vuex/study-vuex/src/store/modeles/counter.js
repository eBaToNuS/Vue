export default {
  namespaced: true,
  state() {
    return {
      counter: 1,
    };
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload.value;
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    doubleCounter(state, getters, rootState, rootGetters) {
      console.log("state", state);
      console.log("getters", getters);
      console.log("rootState", rootState);
      console.log("rootGetters", rootGetters);

      return getters.counter * 2;
    },
  },
  actions: {
    incrementAsync({ commit }, payload) {
      setTimeout(() => {
        commit("increment", { value: payload.value });
      }, payload.delay);
    },
  },
};
