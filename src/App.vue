<template>
  <div>
    <AppHeader />

    <main>
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
main {
  min-height: calc(100vh - 160px);
}
</style>
