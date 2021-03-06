import Vue from "vue";
import Router from "vue-router";
import NotFound from "../views/NotFound";
import cats from "../views/Cats";
import store from "../store/index";

Vue.use(Router);
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser;
  if (currentUser.role !== "admin") {
    next("/404");
    return;
  }
  next();
};

const isAuthenticated = (to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated;
  if (!isAuthenticated) {
    next("/signin");
    return;
  }

  next();
};

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
      path: "/feed/:id",
      name: "feed",
      component: () => import("../views/Feed.vue"),
    },
    {
      path: "/feedage/:id",
      name: "feedage",
      component: () => import("../views/FeedAge.vue"),
    },
    {
      path: "/feedfunction/:id",
      name: "feedfunction",
      component: () => import("../views/FeedFunction.vue"),
    },
    {
      path: "/can/:id",
      name: "can",
      component: () => import("../views/Can.vue"),
    },
    {
      path: "/cantype/:id",
      name: "cantype",
      component: () => import("../views/CanType.vue"),
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
      beforeEnter: isAuthenticated,
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
      beforeEnter: isAuthenticated,
    },
    {
      path: "/orders",
      name: "orders",
      component: () => import("../views/Order.vue"),
      beforeEnter: isAuthenticated,
    },
    {
      path: "/orders/:id/payment",
      name: "payment",
      component: () => import("../views/Payment.vue"),
      beforeEnter: isAuthenticated,
    },
    {
      path: "/admin/NewProduct",
      name: "AdminCreateProduct",
      component: () => import("../views/AdminCreateProduct.vue"),
      beforeEnter: authorizeIsAdmin,
    },
    {
      path: "/admin/EditProduct/:id",
      name: "AdminEditProduct",
      component: () => import("../views/AdminEditProduct.vue"),
      beforeEnter: authorizeIsAdmin,
    },
    {
      path: "/admin/EditThisWeekActivity/:id",
      name: "AdminEditThisWeekActivity",
      component: () => import("../views/AdminEditThisWeekActivity.vue"),
      beforeEnter: authorizeIsAdmin,
    },
    {
      path: "/admin/EditNewActivity/:id",
      name: "AdminEditNewActivity",
      component: () => import("../views/AdminEditNewActivity.vue"),
      beforeEnter: authorizeIsAdmin,
    },
    {
      path: "/admin/NewActivity",
      name: "AdminCreateActivity",
      component: () => import("../views/AdminCreateActivity.vue"),
      beforeEnter: authorizeIsAdmin,
    },
    {
      path: "/admin/CreateFeed",
      name: "AdminCreateFeed",
      component: () => import("../views/AdminCreateFeed.vue"),
      beforeEnter: authorizeIsAdmin,
    },
    {
      path: "/admin/store",
      name: "AdminGetStore",
      component: () => import("../views/AdminGetStore.vue"),
      beforeEnter: authorizeIsAdmin,
    },
    {
      path: "/admin/activity",
      name: "AdminGetActivity",
      component: () => import("../views/AdminGetActivity.vue"),
      beforeEnter: authorizeIsAdmin,
    },
    {
      path: "/admin/order",
      name: "AdminGetOrder",
      component: () => import("../views/AdminGetOrder.vue"),
      beforeEnter: authorizeIsAdmin,
    },
    {
      path: "/admin/user",
      name: "AdminGetUser",
      component: () => import("../views/AdminGetUser.vue"),
      beforeEnter: authorizeIsAdmin,
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
