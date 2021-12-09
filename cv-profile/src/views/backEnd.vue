<template>
  <v-app>
    <v-card class="rounded-0">
      <p>This is a backend page</p>
      <template>
        <v-row>
          <v-col class="mx-6">
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick a single music"
              prepend-icon="mdi-music"
              label="Music"
            ></v-file-input
          ></v-col>
          <v-col> <v-btn> upload</v-btn></v-col>
        </v-row>
      </template>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) =>
        !value || value.size < 2000000000000 || "Over Music size Limit",
    ],
  }),
};
</script>

<style></style>
