import Vue from "vue";
import Router from "vue-router";
import NotFound from "../views/NotFound";
import cats from "../views/Cats";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: cats,
    },
    {
      path: "/cats",
      name: "cats",
      component: cats,
    },
    {
      path: "/category/:id",
      name: "category",
      component: () => import("../views/Category.vue"),
    },
    {
      path: "/product/:product",
      name: "product",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/Search.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound,
    },
  ],
});
