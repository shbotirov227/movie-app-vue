import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TopRated from "@/views/TopRated.vue";
import Populars from "@/views/Populars.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/toprated",
    name: "TopRated",
    component: TopRated,
  },
  {
    path: "/populars",
    name: "Populars",
    component: Populars,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: function () {
      //   return import(/* webpackChunkName: "about" */ '../views/About.vue')
      // }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
