import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactoView from "../views/ContactoView.vue";
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
      component: ContactoView,
    },
    {
      path: "/noticias",
      name: "noticias",
      component: NoticiasView,
    },
  ],
});

export default router;
