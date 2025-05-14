<template>
  <div class="language-selector">
    <label for="language-select">{{ $t("languageSelector.label") }}:</label>
    <select id="language-select" v-model="currentLocale" @change="changeLocale">
      <option value="es">Español</option>
      <option value="en">English</option>
      <option value="eu">Euskara</option>
    </select>
  </div>
</template>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { locale } = useI18n();
    const currentLocale = ref(locale.value);

    const changeLocale = () => {
      locale.value = currentLocale.value;
      // Opcional: guardar la preferencia de idioma en localStorage
      localStorage.setItem("userLocale", currentLocale.value);
    };

    return {
      currentLocale,
      changeLocale,
    };
  },
};
</script>

<style scoped>
.language-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

label {
  color: white;
  font-size: 0.9rem;
}

select {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  font-size: 0.9rem;
}
</style>
