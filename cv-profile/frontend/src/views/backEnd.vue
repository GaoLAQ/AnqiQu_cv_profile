<template>
  <v-app>
    <v-divider borderWidth="20" class="mb-5 grey"></v-divider>
    <v-row>
      <v-col cols="2">
        <p class="ma-5">Present my music</p>
      </v-col>
      <v-col cols="10" class="d-flex justify-space-between mb-6">
        <v-row>
          <v-card
            v-for="music in getAllMusic"
            :key="music.id"
            class="ma-5"
            width="300"
            height="auto"
          >
            {{ music.id }}
            <v-img
              height="200px"
              :src="`${
                music.url === null
                  ? 'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg'
                  : music.url
              }`"
            >
              <v-app-bar flat color="rgba(0,0,0,0)">
                <v-spacer />
                <v-menu top :offset-y="false">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="black" icon>
                      <v-icon dark v-bind="attrs" v-on="on">
                        mdi-dots-vertical
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <template>
                        <v-icon @click="confirmOptions(index, music.id)">
                          {{ item.icon }}
                        </v-icon>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-app-bar>
            </v-img>
            <v-card-text>
              <v-card-title> {{ music.description }} </v-card-title>
              <v-card-actions
                ><v-col>
                  <p class="text-h5">{{ music.title }}</p>
                  <p>Created on: {{ formatTime(music.updatedAt) }}</p>
                </v-col>
              </v-card-actions>
            </v-card-text>

            <Dialog
              ref="dialog"
              :editedIndex="music.id"
              :title="title.music"
              :singleMusic="music"
              :isMusic="true"
              class="item-card"
            />
          </v-card>
          <v-card class="ma-5" width="50" height="50">
            <Dialog :isMusic="true" class="item-card" />
          </v-card>
        </v-row>
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
          <Dialog :title="title.video" :isMusic="false" class="item-card" />
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
// import { mapMutations } from "vuex";
import Dialog from "@/components/Dialog";
import musicService from "@/services/musicService.js";
// import videoService from "@/services/videoService.js";

export default {
  data: () => ({
    musicId: -1,
    singleMusic: [],
    openDialog: false,
    title: {
      music: "Uploading my music",
      video: "Uploading my videos",
    },
    rules: [
      (value) =>
        !value || value.size < 2000000000000 || "Over Music size Limit",
    ],
    items: [
      { title: "Edit", icon: "mdi-lead-pencil" },
      { title: "Delete", icon: "mdi-delete" },
    ],
  }),
  components: {
    Dialog,
  },
  mounted() {
    this.fetchAllMusic();
  },
  computed: {
    ...mapState({
      videoDataBase: (state) => state.videoDataBase,
    }),
    ...mapGetters(["getAllMusic"]),
  },
  methods: {
    ...mapActions(["fetchAllMusic"]),
    formatTime(time) {
      const filterData = time.replace("T", " ");
      return filterData.split(".")[0];
    },
    async confirmOptions(idx, musicId) {
      const options = { 0: "edit", 1: "delete" };
      if (options[idx] === "edit") {
        this.$refs.dialog[0].openForm();
      } else if (options[idx] === "delete") {
        try {
          const response = await musicService.deleteSingleMusic(musicId);
          console.log("!!!!!!!", response);
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    },
    navigateTo(url) {
      return this.$router.push(url);
    },
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
