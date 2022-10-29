<template>
  <v-container fluid>
    <v-row class="ma-10" align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="blue--text mt-8"> Register </v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field label="User Name" v-model="userName" :type="text" />
              <v-text-field
                label="Password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                v-model="userPassword"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
              />
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn class="ma-1" @click="register"> Register </v-btn>
          </v-card-actions>
        </v-card>
        <br />
        <div style="color: red" v-html="error"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      text: "",
      valid: false,
      show: false,
      userName: "",
      userPassword: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.userName,
          password: this.userPassword,
        });
        this.$router.push({ name: "Login" });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style></style>
