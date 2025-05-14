import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Contacto from "../views/Contacto.vue";
import NoticiasView from "../views/NoticiasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contacto,
    },
    {
      path: "/noticias",
      name: "noticias",
      component: NoticiasView,
    },
  ],
});

export default router;
