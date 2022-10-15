<template>
  <v-container fluid class="justify-center">
    <v-col class="ma-5">
      <p class="display-1 text-justify text-truncate" style="color: black">
        About me
      </p>

      <p
        class="text-justify text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 black--text"
      >
        {{ content }}
      </p>
      <br />

      <p class="display-1 text-justify text-truncate" style="color: black">
        Work
      </p>

      <data-table :header="cv.work.header" :item="cv.work.items" />
      <br />
      <p class="display-1 text-justify text-truncate" style="color: black">
        Eductation
      </p>

      <data-table :header="cv.education.header" :item="cv.education.items" />

      <br />
      <p class="display-1 text-justify text-truncate" style="color: black">
        Activity
      </p>

      <data-table :header="cv.activity.header" :item="cv.activity.items" />
    </v-col>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import datatable from "@/components/Datatable.vue";

export default {
  data: () => ({}),
  components: {
    "data-table": datatable,
  },
  computed: {
    ...mapState({ content: (state) => state.config.content }),
    ...mapState({
      cv: (state) => state.cv,
    }),
    expand: function () {
      return this.isExpand;
    },
  },
  methods: {},
};
</script>

<style scoped></style>
