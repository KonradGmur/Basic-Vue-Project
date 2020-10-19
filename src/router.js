import Vue from "Vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import FAQ from "./components/FAQ.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/faq", name: "faq", component: FAQ },
];
