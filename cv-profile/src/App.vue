<template>
  <v-app>
    <v-card dark id="name-section">
      <v-card-text>
        <p class="text-left font-weight-medium ml-2 mb-8 mt-6 logo-name">
          Anqi Qu
        </p>
      </v-card-text>
      <v-divider borderWidth="10" class="mx-5 white"></v-divider>
      <v-card-actions id="nav" class="mx-6 d-flex justify-start mb-2">
        <router-link to="/">Home</router-link>
        <router-link to="/music">Music</router-link>
        <router-link to="/videos">Videos</router-link>
        <router-link to="/anqiCv"> CV </router-link>
      </v-card-actions>
    </v-card>

    <router-view />
  </v-app>
</template>

<style lang="scss">
.logo-name {
  font-family: "Times New Roman", Times, sans-serif !important;
  font-size: 80px;
}
.name-section {
  font-size: 20px;
  padding: 10px 10px;
}
.theme--dark.v-divider {
  border-color: rgba(255, 255, 255, 0.12);
  border-width: 2px;
}

p {
  color: white;
}
#nav {
  padding: 30px 0;
  a {
    font-weight: bold;
    color: white;
    padding-right: 40px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
