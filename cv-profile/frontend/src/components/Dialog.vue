<template>
  <div>
    <v-btn icon fab>
      <v-icon v-if="!singleMusic" color="grey" @click="openForm()" large>
        mdi-plus
      </v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="40%">
      <v-card>
        <v-card-title> {{ title }} </v-card-title>
        <v-form>
          <v-row v-if="isMusic">
            <v-col cols="10" class="ma-3">
              <v-text-field
                v-model="musicForm.title"
                :counter="10"
                label="Music Title"
                required
                outlined
              ></v-text-field>
              <v-textarea
                v-model="musicForm.description"
                label="Music Description"
                required
                outlined
              ></v-textarea>

              <v-file-input
                v-if="isMusic"
                prepend-icon="mdi-music-note-plus"
                multiple
                hint="upload music"
                v-model="musicForm.musicFile"
                outlined
              ></v-file-input>
            </v-col>
          </v-row>

          <v-row v-else>
            <v-col class="ma-3">
              <v-text-field
                v-model="videoForm.title"
                :counter="10"
                label="Video Title"
                outlined
                required
              ></v-text-field>

              <v-textarea
                v-model="videoForm.description"
                label="Video Description"
                required
                outlined
              ></v-textarea>
              <v-file-input
                v-model="videoForm.videoFile"
                prepend-icon="mdi-video-plus"
                multiple
                outlined
                hint="Video to upload"
              ></v-file-input>
              <v-file-input
                v-model="videoForm.videoImage"
                prepend-icon="mdi-image"
                multiple
                outlined
                hint="Video to upload"
              ></v-file-input>
            </v-col>
          </v-row>

          <v-row>
            <v-spacer />
            {{ musicForm }} <br />
            {{ videoForm }}
            <v-card-actions>
              <v-btn color="primary" text @click="submitForm(isMusic)">
                Save
              </v-btn>
              <v-btn color="primary" text @click="closeForm()"> Close </v-btn>
            </v-card-actions>
          </v-row>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import musicService from "@/services/musicService.js";
// import videoService from "@/services/videoService.js";

export default {
  props: {
    title: String,
    isMusic: Boolean,
    singleMusic: Object,
    editedIndex: Number,
  },
  created() {
    if (this.editedIndex > -1) {
      this.musicForm = Object.assign({}, this.singleMusic);
    }
  },
  data() {
    return {
      dialog: false,
      musicForm: {
        title: "",
        description: "",
        musicFile: [],
        date: "",
      },
      videoForm: {
        title: "",
        description: "",
        videoFile: [],
        videoimage: [],
        date: "",
      },
    };
  },
  methods: {
    async submitForm() {
      if (this.editedIndex > -1) {
        await musicService.editSingleMusic(this.editedIndex, this.musicForm);
      } else {
        await musicService.addMusic(this.musicForm);
      }
      // save store
    },
    closeForm() {
      this.dialog = false;
    },
    openForm() {
      this.dialog = true;
    },
  },
};
</script>
