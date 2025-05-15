<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">
        <h1 class="logo">
          <span class="logo-bracket"><</span>goikode<span class="logo-bracket"
            >></span
          >
        </h1>
      </router-link>
      <nav>
        <router-link to="/">{{ $t("nav.home") }}</router-link>
        <router-link to="/about">{{ $t("nav.about") }}</router-link>
        <router-link to="/noticias">{{ $t("nav.noticias") }}</router-link>
        <router-link to="/contacto">{{ $t("nav.contacto") }} </router-link>
        <LanguageSelector class="language-selector" />
      </nav>
    </div>
  </header>
</template>

<script>
import LanguageSelector from "./LanguageSelector.vue";

export default {
  components: {
    LanguageSelector,
  },
};
</script>

<style scoped>
header {
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem 0;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white !important;
  text-decoration: none;
}

.logo-bracket {
  color: var(--primary-color);
}

nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

nav a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

nav a:hover,
nav a.router-link-active {
  color: var(--primary-color);
}

.language-selector {
  margin-left: 1rem;
}

@media (max-width: 600px) {
  header .container {
    flex-direction: column;
    gap: 1rem;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
