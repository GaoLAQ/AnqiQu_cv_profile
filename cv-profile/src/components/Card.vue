<template>
  <v-container class="app-card">
    <v-card dark class="card-content rounded-0">
      <v-card-title
        class="bg-news d-flex justify-start text-justify text-xs-h3 text-md-h4 text-lg-h4 text-xl-h4 white--text pa-4"
      >
        Goals
      </v-card-title>
      <v-card-text>
        <v-list-item class="mt-4">
          <p
            class="d-flex justify-start text-justify text-xs-h3 text-md-h5 text-lg-h5 text-xl-h5 white--text pa-1"
          >
            Born in China and now resident in London, Anqi was a music graduated
            student and willing to become a composer in future; fascinated by
            screen music, She want to bring its dynamic passion to create
            inspiring musical worlds
          </p>
        </v-list-item>
      </v-card-text>

      <v-card-actions class="d-flex justify-center mt-4">
        <v-btn color="white" value="feed" class="mb-7">
          <router-link to="/anqiCv"> Discover More Detail </router-link></v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Card",
  data: () => ({}),
};
</script>

<style scoped></style>
