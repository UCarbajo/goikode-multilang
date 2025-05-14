<template>
  <div>
    <AppHeader />

    <main>
      <router-view />
      <router-view name="news" />
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
