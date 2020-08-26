<template>
  <v-app-bar app color="#9198e5" dark>
    <v-app-bar-nav-icon @click.stop="mini = !mini" />
    <v-toolbar-title style="width:300px" class="ml-0 pl-4">
      <span class="hidden-sm-and-down">MEVN Stack</span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn v-if="auth" icon>
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-btn v-else icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    mini: false,
    auth: true,
  }),
};
</script>