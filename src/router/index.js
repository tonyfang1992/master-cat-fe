import Vue from "vue";
import Router from "vue-router";
import NotFound from "../views/NotFound";
import cats from "../views/Cats";
import store from "../store/index";

Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: cats,
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUp.vue"),
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
      path: "/products/:id",
      name: "product",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/profile/:id",
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
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/Checkout.vue"),
    },
    {
      path: "/orders",
      name: "orders",
      component: () => import("../views/Order.vue"),
    },
    {
      path: "/orders/:id/payment",
      name: "payment",
      component: () => import("../views/Payment.vue"),
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound,
    },
  ],
});
router.beforeEach((to, from, next) => {
  store.dispatch("fetchCurrentUser");
  next();
});

export default router;
