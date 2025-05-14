<template>
  <div class="about">
    <h1>{{ $t("about.title") }}</h1>

    <div class="about-content">
      <div class="about-text">
        <h2>{{ $t("about.mission.title") }}</h2>
        <p>{{ $t("about.mission.description") }}</p>

        <h2>{{ $t("about.history.title") }}</h2>
        <p>{{ $t("about.history.description") }}</p>

        <h2>{{ $t("about.team.title") }}</h2>
        <p>{{ $t("about.team.description") }}</p>

        <div class="fun-fact">
          <h3>{{ $t("about.funFact.title") }}</h3>
          <p>{{ $t("about.funFact.description") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Mantener los mismos estilos que antes */
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.about-content {
  margin-top: 2rem;
}

h2 {
  color: var(--secondary-color);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.fun-fact {
  background-color: #e6f7ff;
  border-left: 4px solid #1890ff;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 4px;
}

.fun-fact h3 {
  color: #1890ff;
  margin-bottom: 0.5rem;
}
</style>
