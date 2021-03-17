<template>
  <div class="home">
    <!-- App.vue -->

    <v-app class="grey lighteen-4" app>
      <Navbar />

      <!-- Sizes your content based upon application components -->
      <v-main>
        <Content />
        <!-- Provides the application the proper gutter -->
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Content from "../components/Content";

export default {
  name: "Home",
  data() {
    return {
      events: [],
    };
  },
  components: {
    Navbar,
    Content,
  },
};
</script>
