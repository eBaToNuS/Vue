const App = {
  data() {
    return {
      counter: 3,
      /*   appTitle: 0, */
    };
  },
};

const app = Vue.createApp(App);
app.mount("#app");
