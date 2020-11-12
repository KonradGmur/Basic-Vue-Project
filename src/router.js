import Vue from "Vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import FAQ from "./components/FAQ.vue";
import Login from "./components/Loading.vue";
import TicketsLayout from "./components/TicketsLayout.vue";
import state from "./state";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/faq", name: "faq", component: FAQ },
  { path: "/login", name: "login", component: Login, meta: { quest: true } },
  {
    path: "/tickets",
    name: "tickets",
    component: TicketsLayout,
    meta: { private: true },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.meta.private && !state.user) {
    next({
      name: "login",
      params: {
        wantedRoute: to.fullPath,
      },
    });
    return;
  }
  if (to.meta.quest && state.user) {
    next({ name: "home" });
  }
  next();
});

export default router;
