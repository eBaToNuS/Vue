const h = Vue.h;

const app = Vue.createApp({
  /*   template: `
    <div class="center card">
    <h1>{{title}}</h1>
    </div>
    `, */
  data() {
    return {
      title: "Титул",
    };
  },
  methods: {
    changeTitle() {
      this.title = "Строчки изменили";
    },
  },
  render() {
    return h(
      "div",
      {
        class: "card center",
      },
      [
        h("h1", {}, this.title),
        h("button", { class: "btn", onClick: this.changeTitle }, "Изменить"),
      ]
    );
  },
});

app.mount("#app");
