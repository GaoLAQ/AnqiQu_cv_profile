<template>
  <v-card dark class="overflow-hidden rounded-0">
    <v-card-text>
      <p
        class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h2 text-xs-h2 white--text text-justify"
      >
        Anqi Qu
      </p>
    </v-card-text>

    <v-divider borderWidth="20" class="mx-0 white"></v-divider>

    <v-card-actions id="nav" class="mx-6 d-flex justify-center">
      <v-row class="justify-center">
        <v-col class="mr-1" v-for="config in configTitle" :key="config">
          <router-link :to="`${config.url}`" class="headline">
            {{ config.name }}</router-link
          >
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  data: () => ({
    configTitle: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Music",
        url: "/music",
      },
      {
        name: "Videos",
        url: "/videos",
      },
      {
        name: "CV",
        url: "/anqiCv",
      },
    ],
  }),
};
</script>

<style scoped></style>
