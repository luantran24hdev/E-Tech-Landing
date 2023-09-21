<template>
  <div id="app">
    <router-view />
 
  </div>
</template>

<script>
import EventBus from "@/EventBus";

export default {
  data: () => ({
    isLoading: true,
  }),

  mounted() {
    EventBus.$on("i18n-load-start", () => (this.isLoading = true));

    EventBus.$on("i18n-load-complete", () => (this.isLoading = false));
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Montserrat", sans-serif;
  font-family: "Playfair Display", serif;
  color: black;
  list-style: none;
  text-decoration: none;
}

#app .container {
  padding: 1rem;
}
</style>
