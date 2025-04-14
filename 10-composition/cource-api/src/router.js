import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./HomePage.vue";
import ReusablePage from "./ReusablePage.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, alias: "/:notFound(.*)" },
    { path: "/reusable", component: ReusablePage },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
