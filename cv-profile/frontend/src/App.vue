<template>
  <v-app fluid>
    <Header />
    <router-view />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  data: () => {
    return {};
  },
  components: {
    Header,
  },
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
