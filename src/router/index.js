import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Contacto from "../views/Contacto.vue";
import NoticiasView from "../views/NoticiasView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    // Aquí usamos "components" en lugar de "component". Se asigna:
    // • default: para el router-view sin nombre (HomeView)
    // • news: para el router-view con name="news" (NoticiasView)
    components: {
      default: HomeView,
      news: NoticiasView,
    },
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
