<template>
  <div class="news">
    <h1>{{ $t("news.title") }}</h1>
    <div class="news-content">
      <div class="news-item">
        <h2>{{ $t("news.items.1.title") }}</h2>
        <p>{{ $t("news.items.1.description") }}</p>
        <span class="news-date">{{ $t("news.items.1.date") }}</span>
      </div>
      <div class="news-item">
        <h2>{{ $t("news.items.2.title") }}</h2>
        <p>{{ $t("news.items.2.description") }}</p>
        <span class="news-date">{{ $t("news.items.2.date") }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.news-content {
  margin-top: 2rem;
}

.news-item {
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}

.news-item h2 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.news-date {
  font-size: 0.9rem;
  color: #777;
}
</style>
