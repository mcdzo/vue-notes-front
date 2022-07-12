import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "../src/pages/HomePage.vue";
import LoginPage from "../src/pages/LoginPage.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
