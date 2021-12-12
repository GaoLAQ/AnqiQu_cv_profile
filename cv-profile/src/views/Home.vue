<template>
  <v-app id="main-section">
    <v-card dark id="music-section" class="rounded-0">
      <video-background
        class="mt-4"
        :src="require('@/assets/video.mp4')"
        style="max-height: 400px; height: 100vh"
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
      >
      </video-background>
      <info-app />
    </v-card>

    <v-card dark id="music-section" class="rounded-0">
      <!-- <music-app /> -->
      <audio-player />
    </v-card>
    <v-card dark id="content-section" class="rounded-0">
      <contact-form />
    </v-card>
  </v-app>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player";
import introducedCard from "@/components/Card.vue";
// import MusicComponent from "../components/MusicComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
import AuidoPlayer from "../components/AudioPlayer.vue";

export default {
  name: "Home",
  components: {
    "info-app": introducedCard,
    // "music-app": MusicComponent,
    "contact-form": ContactComponent,
    "video-background": VideoBackground,
    "audio-player": AuidoPlayer,
  },
};
</script>

<style scoped></style>
