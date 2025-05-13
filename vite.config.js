import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Cambia esto por el nombre de tu repositorio en GitHub
const repoName = "goikode-multilang";

export default defineConfig(({ mode }) => {
  return {
    base: mode === "production-gh" ? `/${repoName}/` : "/",
    plugins: [vue()],
  };
});
