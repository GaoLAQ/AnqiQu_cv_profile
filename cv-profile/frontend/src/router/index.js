import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Dialog from "@/components/Dialog"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/music",
    name: "Music",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Music.vue"),
  },
  {
    path:"/music/:id",
    name:"Dialog", 
    component: Dialog
  },
  {
    path: "/video",
    name: "Video",
    component: () => import("../views/Video.vue"),
  },
  {
    path: "/AnqiCv",
    name: "AnqiCv",
    component: () => import("../views/AnqiCv.vue"),
  },
  {
    path: "/backEnd",
    name: "backEnd",
    component: () => import("../views/backEnd.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
