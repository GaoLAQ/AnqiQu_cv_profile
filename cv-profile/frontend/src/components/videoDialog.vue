<template>
  <v-container>
    <v-row>
      <v-btn color="primary" class="ma-2" dark @click="dialog2 = true">
        Upload my documents
      </v-btn>
      <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
          <v-card-title> Uploading Videos </v-card-title>
          <v-card-text>
            <v-file-input
              class="upload-video"
              prepend-icon="mdi-video-plus"
              multiple
              hint="Video to upload"
            ></v-file-input>
            <br />
            <v-file-input
              class="upload-video"
              prepend-icon="mdi-music-note-plus"
              multiple
              hint="Music to upload"
            ></v-file-input>
            <v-select
              :items="select"
              label="A Select List"
              item-value="text"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog2 = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: "Click Me",
        },
        {
          title: "Click Me",
        },
        {
          title: "Click Me",
        },
        {
          title: "Click Me 2",
        },
      ],
      select: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" },
      ],
    };
  },
};
</script>
