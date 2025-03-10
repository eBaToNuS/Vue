const App = {
  data() {
    return {
      counter: 3,
      appTitle: "Счетчик",
    };
  },
};

Vue.createApp(App).mount("#app");
