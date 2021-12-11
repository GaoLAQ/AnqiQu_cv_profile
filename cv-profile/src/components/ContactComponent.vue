<template>
  <v-container>
    <v-card class="rounded-0" dark>
      <v-card-text> Leave Your Message </v-card-text>
      <v-card-text>
        <v-form class="pa-5" v-model="valid">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="message.firstname"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="message.lastname"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="message.email"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea outlined v-model="message.form" :rules="messageRules">
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
      console.log(this.valid);
    },
  },
};
</script>

<style></style>
