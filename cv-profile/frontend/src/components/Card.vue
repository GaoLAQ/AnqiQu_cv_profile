<template>
  <v-container>
    <v-card dark class="card-content rounded-0">
      <v-card-title
        class="bg-news d-flex justify-start text-justify text-xs-h3 text-md-h4 text-lg-h4 text-xl-h4 white--text pa-4"
      >
        My Detail
      </v-card-title>
      <v-card-text>
        <v-list-item class="mt-4">
          <p
            class="d-flex justify-start text-justify text-xs-h3 text-md-h5 text-lg-h5 text-xl-h5 white--text pa-1"
          >
            {{ content }}
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
import { mapState } from "vuex";
export default {
  name: "Card",
  data: () => ({}),
  computed: {
    ...mapState({
      content: (state) => state.config.configContent,
    }),
  },
};
</script>

<style scoped></style>
