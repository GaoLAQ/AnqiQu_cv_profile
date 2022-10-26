<template>
  <v-container>
    <v-card class="rounded-0" dark>
      <v-card-title
        class="bg-news d-flex justify-start text-justify text-xs-h3 text-md-h4 text-lg-h4 text-xl-h4 white--text pa-4"
      >
        Contact Me
      </v-card-title>
      <v-card-text>
        <v-form class="pa-5" v-model="valid">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                label="First name"
                :rules="nameRules"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                label="Last name"
                :rules="nameRules"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                label="E-mail"
                :rules="emailRules"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea outlined v-model="form" :rules="messageRules">
              </v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="mr-3" @click="submitForm()"> Submit Form </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    message: {},
    valid: false,
    firstname: "",
    lastname: "",
    form: "",
    email: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    messageRules: [
      (v) => v.length <= 250 || "Message must be less than 250 characters",
    ],
  }),
  methods: {
    submitForm() {
      this.message.firstname = this.firstname;
      this.message.lastname = this.lastname;
      this.message.email = this.email;
      this.message.form = this.form;
    },
  },
};
</script>

<style></style>
