import Vue from "Vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import FAQ from "./components/FAQ.vue";
import Login from "./components/Loading.vue";
import TicketsLayout from "./components/TicketsLayout.vue";
import state from "./state";
import Tickets from "./components/Ticket.vue";
import NewTicket from "./components/NewTicket.vue";
import NotFound from "./components/Notfound.vue";

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
    children: [
      { path: "", name: "tickets", component: Tickets },
      { path: "new", name: "ticket", component: NewTicket },
    ],
  },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.metched.some((r) => r.meta.private) && !state.user) {
    next({
      name: "login",
      params: {
        wantedRoute: to.fullPath,
      },
    });
    return;
  }
  if (to.matched.some((r) => r.meta.quest) && !state.user) {
    next({ name: "home" });
  }
  next();
});

export default router;
