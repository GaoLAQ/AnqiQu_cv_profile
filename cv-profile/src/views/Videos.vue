<template>
  <div id="video" class="d-flex justify-space-between">
    <v-row class="mt-3 justify-space-around mb-6">
      <v-card
        class="rounded-0 mb-2"
        dark
        width="500"
        v-for="video in videos"
        :key="video.source"
      >
        <video id="myPlayer" width="500" controls>
          <source :src="video.source" type="video/mp4" />
        </video>
        <v-card-text class="pa-3 text-justify">
          {{ video.description }}
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => {
    return {};
  },
  created() {},
  computed: {
    ...mapState({
      videos: (state) => state.videoDataBase,
    }),
  },
  methods: {},
  watch: {},
};
</script>

<style scoped>
#video {
  padding: 40px;
}
</style>
