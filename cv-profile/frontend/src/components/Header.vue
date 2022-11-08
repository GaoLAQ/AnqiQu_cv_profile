<template>
  <v-card dark class="overflow-hidden rounded-0">
    <v-card-text>
      <p
        class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h2 text-xs-h2 white--text text-justify"
        @click="homeRouter"
      >
        Anqi Qu
      </p>
    </v-card-text>

    <v-divider borderWidth="20" class="mx-0 white"></v-divider>

    <v-card-actions id="nav" class="mx-6 d-flex justify-center">
      <v-row class="justify-center">
        <v-col
          class="mr-1"
          v-for="config in config.configTitle"
          :key="config.url"
        >
          <router-link :to="`${config.url}`" class="headline">
            {{ config.name }}</router-link
          >
        </v-col>
        <v-col v-if="isUserLoggedIn">
          <router-link
            :to="{ name: 'backEnd' }"
            class="headline"
            v-if="isUserLoggedIn"
          >
            My Setting
          </router-link>
        </v-col>
        <v-col v-if="isUserLoggedIn">
          <router-link
            :to="{ name: 'home' }"
            class="headline"
            v-if="isUserLoggedIn"
          >
            Log Out
          </router-link>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Card",
  data: () => ({}),
  computed: {
    ...mapState({ config: (state) => state.config }),
    ...mapState({ isUserLoggedIn: (state) => state.isUserLoggedIn }),
  },
  methods: {
    homeRouter() {
      this.$router.push({ name: "Home" });
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
    },
  },
};
</script>

<style scoped></style>
