<template>
  <v-app class="grey lighteen-4">
    <Home />
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
