<template>
  <div>
    <AppHeader />

    <main>
      <router-view />
      <div class="test">
        <router-link to="/noticias" style="text-decoration: none">
          <router-view name="news" />
        </router-link>
      </div>
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
.test {
  display: flex;
  justify-content: center;
  height: 16rem;
  overflow: hidden;
  position: relative;
}
</style>
