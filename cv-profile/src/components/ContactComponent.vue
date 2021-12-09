<template>
  <v-container>
    <v-card class="rounded-0" dark>
      <v-card-text> Leave Your Message </v-card-text>
      <v-card-content>
        <v-form class="pa-5" v-model="valid">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="30"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="30"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea outlined :counter="250" v-model="message">
              </v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-card-content>
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
    messageForm: {},
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
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
      this.firstname = this.messageForm.firstname;

      // this.lastname = this.messageForm.lastname;
      // this.email = this.messageForm.email;

      console.log(this.messageForm);
    },
  },
};
</script>

<style></style>
