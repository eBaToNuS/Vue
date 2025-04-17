import { createRouter, createWebHistory } from "vue-router";
import NewPage from "@/views/NewPage.vue";
import TaskPage from "@/views/TaskPage.vue";
import TasksPage from "@/views/TasksPage.vue";

const routes = [
  {
    path: "/",
    name: "Tasks",
    component: TasksPage,
  },
  {
    path: "/new",
    name: "New",
    component: NewPage,
  },
  {
    path: "/task/:id",
    name: "Task",
    props: true,
    component: TaskPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
