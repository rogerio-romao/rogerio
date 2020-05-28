import Vue from "vue";
import VueRouter from "vue-router";
import AllProjects from "../views/AllProjects.vue";
import Featured from "../views/Featured.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Featured",
    component: Featured
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/projects",
    name: "AllProjects",
    component: AllProjects
  }
];

const router = new VueRouter({
  routes
});

export default router;
