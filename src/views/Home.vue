<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <TodoComponent />
    </v-main>
    <v-btn v-scroll="onScroll" bottomcolor="red" dark fab fixed right @click="toTop">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import TodoComponent from "../components/TodoComponent";

export default {
  props: {
    source: String,
  },
  components: {
    Header,
    TodoComponent,
  },
  data: () => ({
    fab: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style>
</style>