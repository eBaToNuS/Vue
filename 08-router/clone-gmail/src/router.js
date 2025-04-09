import { createRouter, createWebHistory } from "vue-router";
import TheLog from "./views/theLog.vue";
//import Mail from "./views/theMail.vue";
import Forget from "./views/theForget.vue";
import Dashboard from "./views/theDashboard.vue";
import AppEmailBody from "./components/AppEmailBody.vue";
import NotFound from "./views/NotFound.vue";

const Mail = () => import("./views/theMail.vue"); //Динамическая загрузка при помощи LazyLoading. Создает доп. чанк

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/dashboard",
      component: Dashboard,
      name: "home",
      beforeEnter() {
        console.log("beforeEnter");
      },
    }, //path - адрес страницы(внешнее имя). component - Компонент этой страницы. name - название адреса (внутреннее имя), beforeEnter - дейсвия после перехода на страницу локально
    { path: "/login", component: TheLog, alias: "/" }, // alias - Ссылка, которая автоматически отправляет в path
    {
      path: "/mail",
      component: Mail,
      name: "email",
      children: [{ path: ":mailId?", component: AppEmailBody, props: true }], //children - Дети страницы mail
    },
    { path: "/forget", component: Forget, meta: { cantEnter: true } }, //meta - просто данные страницы
    { path: "/:notFound(.*)" /* redirect: "/login"  */, component: NotFound }, //"/:notFound(.*)" Все страницы, не определенные в роуте. redirect: перенаправляет на действительную страницу
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  // Действия до перехода на страницу
  console.log("beforeEach");
  if (to.meta.cantEnter) {
    next(/* "/dashboard" */ { name: "home" });
  } else {
    next();
  }
});

/* router.afterEach((to, from) => {}); */ // Действия после перехода на страницу

export default router;
