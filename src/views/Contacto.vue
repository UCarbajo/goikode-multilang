<template>
  <div class="contact">
    <h1>{{ $t("contact.title") }}</h1>
    <p>{{ $t("contact.description") }}</p>

    <form class="contact-form" enctype="text/plain">
      <div class="form-control">
        <label for="name">{{ $t("contact.name") }}</label>
        <input
          type="text"
          id="name"
          name="name"
          :placeholder="$t('contact.namePlaceholder')"
          required
        />
      </div>

      <div class="form-control">
        <label for="email">{{ $t("contact.email") }}</label>
        <input
          type="email"
          id="email"
          name="email"
          :placeholder="$t('contact.emailPlaceholder')"
          required
        />
      </div>

      <div class="form-control">
        <label for="subject">{{ $t("contact.subject") }}</label>
        <input
          type="text"
          id="subject"
          name="subject"
          :placeholder="$t('contact.subjectPlaceholder')"
        />
      </div>

      <div class="form-control">
        <label for="message">{{ $t("contact.message") }}</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          :placeholder="$t('contact.messagePlaceholder')"
          required
        ></textarea>
      </div>

      <button type="submit" @click="enviarFormulario">
        {{ $t("contact.submit") }}
      </button>
    </form>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>{{ $t("contact.summary") }}</h2>
        <p v-html="modalMessage"></p>
        <button @click="closeModal">{{ $t("contact.close") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      modalMessage: "",
    };
  },
  methods: {
    enviarFormulario(event) {
      event.preventDefault();
      const nombre = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      this.modalMessage = `Nombre: ${nombre}<br>Email: ${email}`;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  min-width: 300px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.modal-content button {
  margin-top: 1rem;
  background: #1890ff;
  color: #fff;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
}

.contact {
  max-width: 800px;
  margin: 3rem auto;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
}

.contact h1 {
  margin-bottom: 1rem;
}

.contact p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-control {
  display: flex;
  flex-direction: column;
}

.form-control label {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-control input,
.form-control textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-control input:focus,
.form-control textarea:focus {
  border-color: #1890ff;
  outline: none;
  box-shadow: 0 0 5px rgba(24, 144, 255, 0.3);
}

button[type="submit"] {
  align-self: flex-end;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #1890ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #1070c0;
}
</style>
