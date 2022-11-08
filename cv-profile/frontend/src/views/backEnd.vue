<template>
  <v-container class="ma-5">
    <v-divider borderWidth="20" class="mb-5 grey"></v-divider>
    <v-row class="mb-5">
      <v-col cols="2">
        <p class="ma-5">Present my music</p>
      </v-col>
      <v-col cols="10" class="d-flex justify-space-between mb-6">
        <v-card
          v-for="music in musicPlaylist"
          :key="music.title"
          class="ma-5"
          width="300"
          height="auto"
        >
          <v-card-title class="text-h5"> {{ music.title }}</v-card-title>
          <v-card-text> {{ music.description }} </v-card-text>
          <v-card-actions>
            <v-card-text> Created on: {{ music.date }} </v-card-text>
          </v-card-actions>
        </v-card>
        <v-card class="ma-5" width="300" height="auto">
          <Dialog
            :title="title.music"
            :isMusic="(isMusic = true)"
            class="item-card"
          />
        </v-card>
      </v-col>
    </v-row>
    <br />
    <v-divider borderWidth="20" class="mb-5 grey"></v-divider>
    <br />
    <v-row>
      <v-col cols="2">
        <p class="ma-5">Present my video</p>
      </v-col>
      <v-col cols="10" class="d-flex justify-space-between mb-6">
        <v-card
          v-for="video in videoDataBase"
          :key="video.title"
          class="ma-5"
          width="300"
          height="auto"
        >
          <v-card-title class="text-h5"> {{ video.title }}</v-card-title>
          <v-card-text> {{ video.description }} </v-card-text>
          <v-card-actions>
            <v-card-text> Created on: {{ video.date }} </v-card-text>
          </v-card-actions>
        </v-card>
        <v-card class="ma-5" width="300" height="auto">
          <Dialog
            :title="title.video"
            :isMusic="(isMusic = false)"
            class="item-card"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Dialog from "@/components/Dialog";
import musicService from "@/services/musicService.js";
import videoService from "@/services/videoService.js";

export default {
  data: () => ({
    allMusic: [],
    allVideos: [],
    title: {
      music: "Uploading my music",
      video: "Uploading my videos",
    },
    isMusic: null,
    rules: [
      (value) =>
        !value || value.size < 2000000000000 || "Over Music size Limit",
    ],
  }),
  async mounted() {
    const allMusic = await musicService.getAllMusic();
    const allVideos = await videoService.getAllVideo();

    alert(allMusic, allVideos);
  },
  computed: {
    ...mapState({
      musicPlaylist: (state) => state.musicPlaylist,
      videoDataBase: (state) => state.videoDataBase,
    }),
  },
  components: {
    Dialog,
  },
};
</script>

<style scoped>
.item-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
