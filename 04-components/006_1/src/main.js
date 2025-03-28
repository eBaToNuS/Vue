import { createApp } from "vue";
import App from "./App.vue";
import theHeader from "./theHeader.vue";

const app = createApp(App);

// global
app.component("the-header", theHeader);
app.mount("#app");
