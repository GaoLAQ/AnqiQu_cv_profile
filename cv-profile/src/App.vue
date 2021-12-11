<template>
  <div id="app">
    <v-app fluid>
      <v-card dark class="overflow-hidden rounded-0">
        <v-card-text>
          <p
            class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h2 text-xs-h2 white--text text-justify"
          >
            Anqi Qu
          </p>
        </v-card-text>
        <v-divider borderWidth="10" class="mx-5 white"></v-divider>

        <v-card-actions id="nav" class="mx-6 d-flex justify-center">
          <v-row class="justify-center">
            <v-col class="mr-1">
              <router-link to="/" class="headline">Home</router-link>
            </v-col>
            <v-col class="mr-1">
              <router-link to="/music" class="headline">Music</router-link>
            </v-col>
            <v-col class="mr-1">
              <router-link to="/videos" class="headline">Videos</router-link>
            </v-col>
            <v-col class="mr-1">
              <router-link to="/anqiCv" class="headline"> CV </router-link>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>

      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  components: {},
};
</script>

<style lang="scss">
// This is common style
$body-font-family: "Oxygen";
$title-font: "Comfortaa";
a {
  text-decoration: none;
}
.v-application #nav a {
  color: white;
}
.application {
  font-family: "Times New Roman", Times, sans-serif !important;
}
.headline,
.title,
.subheading {
  font-family: $body-font-family !important;
}
.v-divider {
  border-color: rgba(255, 255, 255, 0.12);
  border-width: 2px;
}
</style>
