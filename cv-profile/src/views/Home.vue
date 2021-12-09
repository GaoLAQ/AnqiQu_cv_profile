<template>
  <v-app id="main-section">
    <v-card dark id="music-section" class="rounded-0">
      <video-background
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        style="width: auto; max-height: 400px; height: 100vh"
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
      >
      </video-background>
      <info-app />
    </v-card>

    <v-card dark id="music-section" class="rounded-0">
      <music-app />
    </v-card>
    <v-card dark id="content-section" class="rounded-0">
      <contact-form />
    </v-card>
  </v-app>
</template>

<script>
// @ is an alias to /src
import introducedCard from "@/components/Card.vue";
import MusicComponent from "../components/MusicComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
import VideoBackground from "vue-responsive-video-background-player";

export default {
  name: "Home",
  components: {
    "info-app": introducedCard,
    "music-app": MusicComponent,
    "contact-form": ContactComponent,
    "video-background": VideoBackground,
  },
};
</script>

<style scoped></style>
