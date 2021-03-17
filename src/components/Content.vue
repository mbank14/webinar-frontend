<template>
  <div class="content">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="post in posts" :key="post.id">
          <v-card flat class="text-xs-center ma-3">
            <v-img height="200px" :src="post.image"></v-img>
            <v-card-title @click="colorClick(post.id)">{{
              post.name
            }}</v-card-title>
            <v-card-title>{{ post.organizer.name }}</v-card-title>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="showClick(post.id)">
                <v-icon>{{
                  show == post.id ? "mdi-chevron-up" : "mdi-chevron-down",

                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show == post.id">
                <v-divider></v-divider>

                <v-card-text
                  :style="changeColor == post.id ? `color:red` : `color:black`"
                  >{{ post.description }}</v-card-text
                >
                <v-card-text>Kuota : {{ post.quota }}</v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      show: null,
      changeColor: null,
    };
  },
  computed: {
    ...mapState("posts", ["posts"]),
  },
  created() {
    this.$store.dispatch("posts/loadPosts");
  },
  methods: {
    showClick(id) {
      if (this.show == id) {
        this.show = null;
      } else {
        this.show = id;
      }
    },
    colorClick(id) {
      if (this.changeColor == id) {
        this.changeColor = null;
      } else {
        this.changeColor = id;
      }
    },
  },
};
</script>
