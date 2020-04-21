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
      path: "/subcategory/:id",
      name: "subcategory",
      component: () => import("../views/SubCategory.vue"),
    },
    {
      path: "/thisweekactivity/:id",
      name: "thisweekactivity",
      component: () => import("../views/ThisWeekActivity.vue"),
    },
    {
      path: "/newactivity/:id",
      name: "newactivity",
      component: () => import("../views/NewActivity.vue"),
    },
    {
      path: "/products/:id",
      name: "product",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/products/new",
      name: "NewProduct",
      component: () => import("../views/NewProducts.vue"),
    },
    {
      path: "/products/hot",
      name: "HotProduct",
      component: () => import("../views/HotProducts.vue"),
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
