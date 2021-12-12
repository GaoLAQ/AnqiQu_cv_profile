<template>
  <v-container>
    <v-card class="pb-5 elevation-0 rounded-0">
      <v-card-title
        class="bg-news d-flex justify-start text-justify text-xs-h3 text-md-h4 text-lg-h4 text-xl-h4 white--text pa-4"
      >
        Music Player
      </v-card-title>
      <v-card-title class="d-flex justify-center">
        Playing Now: {{ this.selected.name }}
      </v-card-title>
      <div class="progress-area">
        <div class="progress-bar" id="progress-bar">
          <div class="timer">
            <span class="current" id="current"> </span>
            <span class="duration" id="duration"> </span>
          </div>
        </div>
      </div>
      <div class="controls">
        <v-icon id="repeat-plist" @click="muteMusic()" v-if="isMuted">
          mdi-volume-high</v-icon
        >
        <v-icon @click="muteMusic()" v-if="!isMuted"> mdi-volume-off </v-icon>

        <v-icon id="prev" @click="playPreviousMusic()">
          mdi-skip-previous</v-icon
        >
        <div class="play-pause">
          <v-icon v-if="isPlay" @click="playMusic()"> mdi-play</v-icon>
          <v-icon v-else @click="stopMusic()"> mdi-pause</v-icon>
        </div>
        <v-icon id="next" @click="playNextMusic()"> mdi-skip-next</v-icon>
        <v-icon id="more-music" @click="openMusicList()">
          mdi-playlist-music
        </v-icon>
      </div>

      <audio id="myPlayer">
        <source
          src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio tag.
      </audio>
    </v-card>
    <v-card v-show="isOpenList">
      <v-card-title
        class="bg-news d-flex justify-start text-justify text-xs-h3 text-md-h4 text-lg-h4 text-xl-h4 white--text pa-4"
        >Music list</v-card-title
      >
      <v-list>
        <v-list-item
          class="d-flex justify-space-around mb-6"
          @click="selectedItem(play)"
          v-for="play in playLists"
          :key="play.id"
          style="width: 100%"
        >
          <p v-if="!play.isSelected">{{ play.id }}</p>
          <v-list-item-icon v-else class="icon-position">
            <v-icon v-text="play.icon"></v-icon>
          </v-list-item-icon>

          <p>{{ play.name }}</p>
          <p>{{ play.duration }}</p>
          <p>{{ play.time }}</p>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      musicName: "",
      isComplete: false,
      songIdx: 0,
      isMuted: true,
      selected: {},
      isOpenList: true,
      isPlay: true,
      progressWidth: 0,
      playLists: [
        {
          id: 1,
          name: "Sample 1",
          src: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
          isSelected: false,
          time: "12/12/2021",
          icon: "mdi-volume-high",
        },
        {
          id: 2,
          name: "Sample 2",
          src: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
          isSelected: false,
          time: "12/12/2021",
          icon: "mdi-volume-high",
        },
        {
          id: 3,
          name: "Sample 3",
          src: "http://jervo.org/zanado/audio/muse.mp3",
          isSelected: false,
          time: "12/12/2021",
          icon: "mdi-volume-high",
        },
      ],
    };
  },
  created() {
    this.selected = this.playLists[0];
  },
  mounted() {
    this.updateProcessBar();
  },
  computer: {},
  watch: {
    isPlay() {
      this.playLists.map((item) => (item.isSelected = false));
    },
    progressWidth: function () {
      if (this.progressWidth === 100) {
        this.isPlay = false;
      }
    },
  },
  methods: {
    muteMusic() {
      this.isMuted = !this.isMuted;
      let myPlayer = document.getElementById("myPlayer");
      if (!this.isMuted) {
        myPlayer.muted = true;
      } else {
        myPlayer.muted = false;
      }
    },
    playMusic() {
      this.isPlay = false;
      let myPlayer = document.getElementById("myPlayer");
      myPlayer.play();
    },
    stopMusic() {
      this.isPlay = true;
      let myPlayer = document.getElementById("myPlayer");
      myPlayer.pause();
    },
    openMusicList() {
      this.isOpenList = !this.isOpenList;
    },
    selectedItem(item) {
      this.selected = item;
      this.selected.isSelected = false;
      this.playLists.map((item) => {
        if (item.id === this.selected.id) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
      });
      this.loadMusic(this.selected.id);
    },
    loadMusic(indexNumber) {
      let audioElement = document.getElementById("myPlayer");
      this.playLists.map((item) => (item.isSelected = false));
      this.selected = this.playLists.filter(
        (item) => item.id === indexNumber
      )[0];

      this.selected.isSelected = true;
      audioElement.src = this.selected.src;

      audioElement.play();
      if (audioElement.play()) {
        this.isPlay = false;
      }
    },
    playPreviousMusic() {
      let songIdx = this.selected.id;
      songIdx = songIdx - 1;
      if (songIdx < 1) {
        songIdx = this.playLists.length;
      }
      this.loadMusic(songIdx);
    },
    playNextMusic() {
      let songIdx = this.selected.id;
      console.log("!: ", songIdx);
      songIdx = songIdx + 1;
      console.log("+: ", songIdx);

      if (songIdx > this.playLists.length) {
        songIdx = 1;
      }
      this.loadMusic(songIdx);
    },
    updateProcessBar() {
      let audioElement = document.getElementById("myPlayer");

      let progressBar = document.getElementById("progress-bar");

      audioElement.addEventListener("timeupdate", (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        let progressWidth = (currentTime / duration) * 100;
        this.progressWidth = (currentTime / duration) * 100;
        progressBar.style.width = `${progressWidth}%`;
        if (progressWidth === 100) {
          this.isPlay = false;
        }
      });

      progressBar.addEventListener("click", (e) => {
        let progressWidthVal = progressBar.clientWidth;
        console.log(progressWidthVal);
        let clickedOffSetX = e.offsetX;
        let songDuration = audioElement.duration;

        audioElement.currentTime =
          (clickedOffSetX / progressWidthVal) * songDuration;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-position {
  padding: 0;
  position: relative;
  left: -13px;
  bottom: 11px;
}
.wrapper {
  width: 380px;
  position: relative;
  border-radius: 15px;
  padding: 25px 30px;
  background: white;
  box-shadow: 0px 6px 15px grey;
}
.progress-area {
  height: 6px;
  width: 100%;
  background: #f0f0f0;
  border-radius: 50px;
  cursor: pointer;
}
.progress-area .progress-bar {
  height: inherit;
  position: relative;
  width: 50%;
  border-radius: inherit;
  background: linear-gradient(90deg, #ff74a4 0%, #9f6ea3 100%);
}
.progress-bar::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  background: #000;
  border-radius: inherit;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  background: inherit;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.progress-area:hover.progress-bar::before {
  opacity: 1;
}

.progress-area.timer {
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.timer span {
  margin-top: 10px;
  font-size: 13px;
  color: lightblue;
}

.progress-area .timer,
.controls,
.music-list .header,
.music-list li {
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.controls {
  margin: 40px 0 5px 0;
}
.controls i {
  font-size: 28px;
  user-select: none;
  background: linear-gradient(#ff74a4 0%, #9f6ea3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.controls i:nth-child(2),
.controls i:nth-child(4) {
  font-size: 43px;
}
.controls #prev {
  margin-right: -13px;
}
.controls #next {
  margin-left: -13px;
}
.controls .play-pause {
  height: 54px;
  width: 54px;
  background: linear-gradient(white 0%, lightgrey 100%);
  box-shadow: 0px 0px 5px pink;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.play-pause::before {
  content: "";
  position: absolute;
  height: 43px;
  width: 43px;
  border-radius: inherit;
  background: linear-gradient(#ff74a4 0%, violet 100%);
}
.play-pause i {
  height: 43px;
  width: 43px;
  border-radius: inherit;
  background: linear-gradient(#ff74a4 0%, violet 100%);
  background-clip: text;
  background: inherit;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  line-height: 43px;
}
.music-list {
  position: absolute;
  left: 0;
  width: 100%;
  padding: 15px 30px;
  bottom: white;
  border-radius: 15px;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
}
.music-list .header .row {
  display: flex;
  align-items: center;
  font-size: 19px;
  color: grey;
}
.header .row i {
  cursor: default;
}
.header .row span {
  margin-left: 5px;
}
.header #close {
  font-size: 22px;
  color: grey;
}
.music-list ul {
  margin: 10px 0;
}
.music-list ul li {
  color: grey;
  cursor: pointer;
  list-style: none;
  padding-bottom: 10px;
  margin-bottom: 5px;
  border-bottom: 1px solid #e5e5e5;
}
.music-list ul li:last-child {
  border-bottom: 0px;
}
.music-list ul li .row span {
  font-size: 17px;
}
ul li .row p {
  opacity: 0.9;
}
.v-list-item {
  width: 100%;
  height: 10px;
  border-bottom: 2px solid lightgrey;
}
</style>
