<template>
  <div class="contact">
    <h1>{{ $t("contacto.title") }}</h1>

    <div class="contact-content">
      <form class="contact-form">
        <div class="form-group">
          <label for="name">{{ $t("contacto.name") }}</label>
          <input type="text" id="name" required />
        </div>
        <div class="form-group">
          <label for="email">{{ $t("contacto.email") }}</label>
          <input type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="message">{{ $t("contacto.message") }}</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <button type="submit">{{ $t("contacto.submit") }}</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-content {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: var(--secondary-color);
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #1176b2;
}
</style>
