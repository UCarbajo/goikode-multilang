<template>
  <div class="news">
    <h1>{{ $t("noticias.titulo") }}</h1>
    <div class="news-list">
      <a href="https://ejemplo.com/noticia1" class="news-item">
        <img src="../assets/noticia.png" alt="Noticia 1" />
        <div class="news-content">
          <h2>{{ $t("noticias.noticia1.titulo") }}</h2>
          <p>
            {{ $t("noticias.noticia1.descripcion") }}
          </p>
        </div>
      </a>
      <a href="https://ejemplo.com/noticia2" class="news-item">
        <img src="../assets/noticia.png" alt="Noticia 2" />
        <div class="news-content">
          <h2>{{ $t("noticias.noticia2.titulo") }}</h2>
          <p>
            {{ $t("noticias.noticia2.descripcion") }}
          </p>
        </div>
      </a>
      <a href="https://ejemplo.com/noticia3" class="news-item">
        <img src="../assets/noticia.png" alt="Noticia 3" />
        <div class="news-content">
          <h2>{{ $t("noticias.noticia3.titulo") }}</h2>
          <p>
            {{ $t("noticias.noticia3.descripcion") }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.news {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.news h1 {
  margin-bottom: 1.5rem;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.news-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.news-item img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.news-content {
  padding: 1rem;
}

.news-content h2 {
  margin: 0 0 0.5rem;
  color: var(--secondary-color);
}

.news-content p {
  margin: 0;
  color: #555;
  font-size: 0.95rem;
}
</style>
