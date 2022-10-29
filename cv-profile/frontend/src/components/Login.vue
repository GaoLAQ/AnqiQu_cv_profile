<template>
  <v-row class="ma-10" align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card>
        <v-list-item> Log in </v-list-item>
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
          <v-btn class="ma-1" @click="login"> Log In </v-btn>
        </v-card-actions>
      </v-card>
      <br />
      <div style="color: red" v-html="error"></div>
    </v-col>
  </v-row>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {};
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.login({
          email: this.userName,
          password: this.userPassword,
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style></style>
