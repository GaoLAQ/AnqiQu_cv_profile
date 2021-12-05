<template>
  <v-container class="app-card">
    <v-card class="pa-3 card-content" width="50%" height="50%">
      <v-card-title class="card-name d-flex justify-center">
        Anqi Qu
      </v-card-title>
      <v-card-title class="card-sub-name d-flex justify-center">
        Music Composer
      </v-card-title>
      <v-card-actions class="main-content mt-4">
        Born in Italy and now resident in London, I was a concert pianist and
        composer once; fascinated by screen music, I have been dedicating my
        soul to this art since 2006. Yes, I won awards, yes, I have been
        involved in top productions and built a solid career. But ultimately I
        create inspiring musical worlds for stories that inspire me in return.
      </v-card-actions>
      <v-card-actions class="d-flex justify-center mt-4">
        <router-link to="/anqiCv" tag="v-btn">
          <v-btn color="white" flat value="feed"> Discover More Detail </v-btn>
        </router-link>
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

<style scoped>
.v-application {
  font-family: "Times New Roman", Times, sans-serif !important;
}
.app-card {
  position: absolute;
  left: 50px;
  top: 50px;
}
.main-content {
  color: white;
  padding: 0px 10px;
}
.card-name {
  font-family: "Times New Roman", Times, sans-serif !important;
  font-size: 80px;
  color: white;
  padding-bottom: 40px;
}
.card-sub-name {
  font-family: "Times New Roman", Times, sans-serif !important;
  color: white;
}
.card-content {
  font-family: "Times New Roman", Times, sans-serif !important;
  background: black;
}
</style>
