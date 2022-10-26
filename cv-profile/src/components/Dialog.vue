<template>
  <div>
    <v-btn color="primary" class="ma-2" dark @click="dialog = true">
      {{ title }}
    </v-btn>
    <v-dialog v-model="dialog" width="40%">
      <v-card>
        <v-card-title> {{ title }} </v-card-title>
        <v-form v-model="valid">
          <v-row v-if="isMusic">
            <v-col cols="10" class="ma-3">
              <v-text-field
                v-model="musicForm.title"
                :rules="nameRules"
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
                :rules="nameRules"
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
                Confirm
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
export default {
  props: {
    title: String,
    isMusic: Boolean,
  },
  data() {
    return {
      dialog: true,
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
    submitForm(isMusic) {
      // save store
      if (isMusic) {
        alert(JSON.stringify(this.musicForm));
      } else {
        alert(JSON.stringify(this.videoForm));
      }
    },
    closeForm() {
      this.dialog = false;
    },
  },
};
</script>
