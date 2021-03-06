import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    /////Register/////
    {
      path: "/register",
      name: "register_index",
      component: () => import("./views/auth/Register.vue")
    },
    /////Login/////
    {
      path: "/login",
      name: "login_index",
      component: () => import("./views/auth/Login.vue")
    },
    /////Logout/////
    {
      path: "/Logout",
      name: "Logout_index",
      component: () => import("./views/auth/Logout.vue")
    },
    /////Confirm/////
    {
      path: "/confirm",
      name: "confirm_index",
      component: () => import("./views/auth/Confirm.vue")
    },
    /////FESTIVALS/////
    {
      path: "/festivals",
      name: "festivals_index",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/festivals/Index.vue")
    },
    {
      path: "/festivals/create",
      name: "festivals_create",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/festivals/Create.vue")
    },
    {
      path: "/festivals/:id",
      name: "festivals_show",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/festivals/Show.vue")
    },
    {
      path: "/festivals/:id",
      name: "festivals_edit",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/festivals/Edit.vue")
    },
    //////////////////

    /////PERFORMERS/////
    {
      path: "/performers",
      name: "performers_index",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/performers/Index.vue")
    },
    {
      path: "/performers/create",
      name: "performers_create",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/performers/Create.vue")
    },
    {
      path: "/performers/:id",
      name: "performers_show",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/performers/Show.vue")
    },
    {
      path: "/performers/:id",
      name: "performers_edit",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/performers/Edit.vue")
    },
    //////////////////

    /////SHOWS/////
    {
      path: "/shows",
      name: "shows_index",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/shows/Index.vue")
    },
    {
      path: "/shows/create",
      name: "shows_create",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/shows/Create.vue")
    },
    {
      path: "shows/:id",
      name: "shows_show",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/shows/Show.vue")
    },
    {
      path: "/shows/:id",
      name: "shows_edit",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/shows/Edit.vue")
    },
    //////////////////

    /////STAGE/////
    {
      path: "/stages",
      name: "stages_index",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/stages/Index.vue")
    },
    {
      path: "/stages/create",
      name: "stages_create",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/stages/Create.vue")
    },
    {
      path: "stages/:id",
      name: "stages_show",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/stages/Show.vue")
    },
    {
      path: "/stages/:id",
      name: "stages_edit",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/stages/Edit.vue")
    }
    //////////////////
  ]
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else next();
});

export default router;
