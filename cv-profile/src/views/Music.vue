<template>
  <div class="about pa-10">
    <v-row class="mt-3 justify-space-between mb-6">
      <v-card class="rounded-0" width="450px" height="auto">
        <div class="player-front-part">
          <div class="grid-item-1">
            <v-img src="../assets/poster.jpg" width="150px" />
          </div>
          <div class="grid-item-2">
            <span class="grid-item-2-play-name"> {{ selected.name }} </span>
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

        <div class="play-list">
          <v-list>
            <v-list-item
              class="play-list-item"
              @click="selectedItem(play)"
              v-for="play in playLists"
              :key="play.id"
              width="100%"
              :id="play.id"
              color="transparent"
            >
              <span v-if="!play.isSelected"> {{ play.id }} </span>
              <span v-else> <v-icon> mdi-volume-high </v-icon></span>
              <span class="ml-4"> {{ play.name }}</span>
            </v-list-item>
          </v-list>
        </div>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      changedName: "",
      selected: {},
      isMuted: false,
      playLists: [
        {
          id: 1,
          name: "Sample 1",
          src: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
          isSelected: false,
        },
        {
          id: 2,
          name: "Sample 2",
          src: "",
          isSelected: false,
        },
        {
          id: 3,
          name: "Sample 3",
          src: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
          isSelected: false,
        },
      ],
    };
  },
  created() {
    this.selected.name = this.playLists[0].name;
  },
  computed: {
    selectedMusicName: function () {
      return this.selected;
    },
  },
  methods: {
    muteMusic() {
      this.isMuted = true;
    },
    getFileInformation() {
      let duration = document.getElementById("myPlayer").duration;
      return duration;
    },
    selectedItem(item) {
      this.selected = item;
      this.selected.isSelected = false;
      let audioElement = document.getElementById("myPlayer");
      audioElement.src = this.selected.src;
      audioElement.play();
      console.log(this.selected.id);
      this.playLists.map((item) => {
        if (item.id === this.selected.id) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
      });
      return this.selected;
    },
  },
  watch: {},
};
</script>

<style scoped>
#myPlayer {
  width: 250px;
  position: relative;
  top: 40px;
}
.v-list-item {
  width: 400px;
  border-bottom: 2px solid lightgrey;
}
.play-list-item {
  height: 8px;
}
span {
  color: white;
}
.player-front-part {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
}

.grid-item-2-play-name {
  font-weight: bold;
  position: relative;
  top: 18px;
  left: 10px;
}

.theme--light.v-list {
  background: rgba(0, 0, 0, 0.87);
  color: rgba(0, 0, 0, 0.87);
}
</style>
