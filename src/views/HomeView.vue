<template>
  <div class="home">
    <div class="hero">
      <div class="hero-content">
        <h1>{{ $t("home.welcome") }}</h1>
        <p class="tagline">{{ $t("home.tagline") }}</p>
        <router-link to="/about" class="btn-primary">{{
          $t("home.learnMore")
        }}</router-link>
      </div>
      <div class="hero-image">
        <img src="../assets/cyberseguridad.png" alt="Ciberseguridad" />
      </div>
    </div>

    <div class="features">
      <div class="feature-card">
        <h3>{{ $t("home.features.protection.title") }}</h3>
        <p>{{ $t("home.features.protection.description") }}</p>
      </div>

      <div class="feature-card">
        <h3>{{ $t("home.features.development.title") }}</h3>
        <p>{{ $t("home.features.development.description") }}</p>
      </div>

      <div class="feature-card">
        <h3>{{ $t("home.features.consulting.title") }}</h3>
        <p>{{ $t("home.features.consulting.description") }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Mantener los mismos estilos que antes */
.home {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.hero-content {
  flex: 1;
}

.hero-image {
  flex: 1;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

.tagline {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.btn-primary {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #3aa876;
  text-decoration: none;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
  }
}
</style>
