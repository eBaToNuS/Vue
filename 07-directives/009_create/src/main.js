import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import translatePlugin from "./translatePlugin";

const app = createApp(App);

const ru = {
  app: {
    title: "Как работают плагины во Vue?",
    button: "Переключить язык",
    buttonAlert: "Вызов Предупреждения",
  },
};

const en = {
  app: {
    title: "How plugins work in Vue",
    button: "Toggle language",
    buttonAlert: "Alert",
  },
};

app.use(translatePlugin, { ru, en });

app.mount("#app");
