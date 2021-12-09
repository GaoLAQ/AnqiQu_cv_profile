<template>
  <div id="video" class="d-flex justify-space-between">
    <v-row class="mt-3 justify-space-between mb-6">
      <v-card
        class="rounded-0 mb-2"
        dark
        width="500px"
        v-for="video in videoDataBase"
        :key="video.source"
      >
        <video id="myPlayer" width="500px" controls>
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
export default {
  data: () => {
    return {
      videoDataBase: [
        {
          description:
            "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
          source:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          title: "Big Buck Bunny",
        },
        {
          description: "The first Blender Open Movie from 2006",
          source:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          title: "Elephant Dream",
        },
        {
          description:
            "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
          source:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          title: "For Bigger Blazes",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
#video {
  padding: 40px;
}
</style>
