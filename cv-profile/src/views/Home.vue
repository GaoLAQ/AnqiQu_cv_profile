<template>
  <v-app class="home">
    <v-img
      alt="Vue logo"
      src="https://static.wixstatic.com/media/2d1dc6_51f7672053974900859f2fa05006a2dc~mv2.jpeg/v1/fill/w_1189,h_980,al_c,q_85,usm_0.66_1.00_0.01/2d1dc6_51f7672053974900859f2fa05006a2dc~mv2.webp"
    />
    <introducedCard />
  </v-app>
</template>

<script>
// @ is an alias to /src
import introducedCard from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    introducedCard,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 980 px;
  object-fit: cover;
  object-position: 50% 50%;
}
.theme--dark.v-application {
  background: #1e1e1e;
  color: #ffffff;
}
</style>
