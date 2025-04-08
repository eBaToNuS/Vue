import { createRouter, createWebHistory } from "vue-router";
import TheLog from "./views/theLog.vue";
import Mail from "./views/theMail.vue";
import Forget from "./views/theForget.vue";
import Dashboard from "./views/theDashboard.vue";
import AppEmailBody from "./components/AppEmailBody.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: TheLog, alias: "/" },
    {
      path: "/mail",
      component: Mail,
      children: [{ path: ":mailId", component: AppEmailBody }],
    },
    { path: "/forget", component: Forget },
    { path: "/dashboard", component: Dashboard },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
