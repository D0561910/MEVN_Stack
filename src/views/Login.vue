<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1
                      class="text-center display-2 purple--text text-lighten-1"
                    >Sign In to Todo List</h1>
                    <div class="text-center">
                      <v-btn class="btn-social mx-2" fab color="blue" outlined>
                        <v-icon>fab fa-facebook</v-icon>
                      </v-btn>
                      <v-btn class="btn-social mx-2" fab color="red" outlined>
                        <v-icon>fab fa-google</v-icon>
                      </v-btn>
                    </div>
                    <h6 class="text-center mlt-4">Ensure your email for registration</h6>
                    <v-form>
                      <v-text-field
                        label="Email"
                        name="Email"
                        prepend-icon="email"
                        type="email"
                        color="purple lighten-3"
                        v-model="username"
                      />
                      <v-text-field
                        id="password"
                        label="Password"
                        name="Password"
                        prepend-icon="lock"
                        type="password"
                        color="purple lighten-3"
                        v-model="password"
                      />
                    </v-form>
                    <h6 class="text-center mt-3">Forget Password?</h6>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn rounded color="purple lighten-1" dark @click="handleSubmit">SIGN IN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="purple lighten-1">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Hello Member</h1>
                  </v-card-text>
                  <div class="text-center">
                    <router-link to="/register">
                      <v-btn rounded outlined dark>SIGN UP</v-btn>
                    </router-link>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import "../styles/button.css";

export default {
  props: {
    source: String,
  },
  data: () => ({
    username: "",
    password: "",
    submitted: false,
  }),
  computed: {
    ...mapState("account", ["status"]),
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    handleSubmit(e) {
      this.submitted = true;
      e.preventDefault;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    },
  },
};
</script>
