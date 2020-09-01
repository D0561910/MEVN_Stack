<template>
  <v-app>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-row class="fill-height">
              <v-col cols="12" md="4" class="purple lighten-1">
                <v-card-text class="white--text mt-12">
                  <h1 class="text-center display-1">Welcome Back</h1>
                </v-card-text>
                <div class="text-center justify-center align-center">
                  <router-link to="/login">
                    <v-btn rounded outlined dark>SIGN IN</v-btn>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="12" md="8">
                <v-card-text class="mt-12">
                  <h1 class="text-center display-2 purple--text text--lighten-1">Create Account</h1>
                  <div class="text-center mt-4">
                    <v-btn class="mx-2" fab color="blue" outlined>
                      <v-icon>fab fa-facebook</v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab color="red" outlined>
                      <v-icon>fab fa-google</v-icon>
                    </v-btn>
                  </div>
                  <h6 class="text-center mt-4">Ensure your email for registration</h6>
                  <v-form>
                    <v-text-field
                      label="Name"
                      name="Name"
                      prepend-icon="person"
                      type="text"
                      color="teal accent-3"
                    />
                    <v-text-field
                      label="Email"
                      name="Email"
                      prepend-icon="email"
                      type="email"
                      color="teal accent-3"
                    />
                    <v-text-field
                      id="password"
                      label="Password"
                      name="Password"
                      prepend-icon="lock"
                      type="password"
                      color="teal accent-3"
                    />
                  </v-form>
                </v-card-text>
                <div class="text-center mt-4">
                  <v-btn rounded outlined color="purple lighten-1" dark>SIGN UP</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import "../styles/button.css";

export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      },
      submitted: false,
    };
  },
  //   computed: {
  //     ...mapState("account", ["status"]),
  //   },
  //   methods: {
  //     ...mapActions("account", ["register"]),
  //     handleSubmit(e) {
  //       this.submitted = true;
  //       this.$validator.validate().then((valid) => {
  //         if (valid) {
  //           this.register(this.user);
  //         }
  //       });
  //     },
  //   },
};
</script>
