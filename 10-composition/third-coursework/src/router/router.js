import { createRouter, createWebHistory } from "vue-router";
import NewPage from "@/views/NewPage.vue";
import TaskPage from "@/views/TaskPage.vue";
import TasksPage from "@/views/TasksPage.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TasksPage, alias: "/:notFound(.*)" },
    { path: "/task", component: TaskPage },
    { path: "/NewPage", component: NewPage },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
