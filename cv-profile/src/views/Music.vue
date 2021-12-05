<template>
  <div class="about pa-10">
    <v-row class="mt-3 justify-space-between mb-6">
      <v-card width="450px" height="auto">
        <div class="player-front-part" style="background: red">
          <div class="grid-item-1">
            <v-img width="150px" src="../assets/poster.jpg" />
          </div>
          <div class="grid-item-2">
            <span class="grid-item-2-play-name"> {{ selected.name }}</span>
            <br />
            <audio id="myPlayer" controls>
              <source
                src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio tag.
            </audio>
          </div>
        </div>

        <v-card-actions>
          <v-list>
            <v-list-item
              @click="selectedItem(play)"
              v-for="play in playLists"
              :key="play.id"
              width="100%"
            >
              {{ play.id }} - {{ play.name }}
            </v-list-item></v-list
          >
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      selected: {},
      playLists: [
        {
          id: "1",
          name: "sample1",
          src: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
        },
        {
          id: "2",
          name: "sample2",
          src: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
        },
        {
          id: "3",
          name: "sample3",
          src: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
        },
      ],
    };
  },
  created() {
    this.selected.name = this.playLists[0].name;
  },
  computed: {
    selectedMusicName: function () {
      return this.selectedItem();
    },
  },
  methods: {
    getFileInformation() {
      let duration = document.getElementById("myPlayer").duration;
      return duration;
    },
    selectedItem(item) {
      this.selected.name = item.name;
      let audioElement = document.getElementById("myPlayer");

      console.log(audioElement.play());
      return item.id;
    },
  },
};
</script>

<style scoped>
#myPlayer {
  width: 250px;
  position: relative;
  top: 40px;
}
.player-front-part {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #2196f3;
  padding: 10px;
}
.grid-item-2-play-name {
  position: relative;
  top: 10px;
  left: 10px;
}
</style>
