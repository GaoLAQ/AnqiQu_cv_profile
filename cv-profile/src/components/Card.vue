<template>
  <v-container class="app-card">
    <v-card dark class="card-content rounded-0">
      <v-card-title
        class="bg-news d-flex justify-start text-justify text-xs-h3 text-md-h4 text-lg-h4 text-xl-h4 white--text pa-4"
      >
        Music Composer
      </v-card-title>
      <v-card-text>
        <v-list-item class="mt-4">
          <p
            class="d-flex justify-start text-justify text-xs-h3 text-md-h5 text-lg-h5 text-xl-h5 white--text pa-1"
          >
            Born in Italy and now resident in London, I was a concert pianist
            and composer once; fascinated by screen music, I have been
            dedicating my soul to this art since 2006. Yes, I won awards, yes, I
            have been involved in top productions and built a solid career. But
            ultimately I create inspiring musical worlds for stories that
            inspire me in return.
          </p>
        </v-list-item>
      </v-card-text>

      <v-card-actions class="d-flex justify-center mt-4">
        <v-btn color="white" value="feed">
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
