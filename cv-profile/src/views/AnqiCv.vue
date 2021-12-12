<template>
  <v-app>
    <v-container fluid class="px-5">
      <p class="display-1 text-justify text-truncate" style="color: black">
        About me
      </p>

      <p
        class="text-justify text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 black--text"
      >
        A well-qualified and inspirational graduate student who can not only
        have a solid understanding of musical theory and aims to develop more
        knowledge of music composition. Anqi has excellent skills playing a
        range of music instruments including piano, guitar and Guzheng(Chinese
        traditional instrument), she likes to create background music for video
        games and movies. Right now, she is looking for a chance to have any
        intership experience become part of team in any Music department/
        company studio
      </p>

      <!-- <v-btn class="mr-2 text-capitalize" @click="expandTree()"> Expand </v-btn>
      <v-btn class="text-capitalize" @click="closeTree()"> Close </v-btn> -->

      <v-treeview :items="items" :open-all="true">
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.file">
            {{ open ? "mdi-folder-open" : "mdi-folder" }}
          </v-icon>
          <v-icon v-else>
            {{ files[item.file] }}
          </v-icon>
        </template>
      </v-treeview>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    isExpand: true,
    files: {
      address: "mdi-map-marker",
      time: "mdi-clock-time-one",
      education: " mdi-school",
      teaching: "mdi-human-male-board-poll ",
      item: "mdi-star-three-points",
    },
    items: [
      {
        id: 1,
        name: "Experience :",
        children: [
          {
            id: 2,
            name: "Senior Music Teacher",
            file: "teaching",
            children: [
              {
                id: 19,
                name: "Liyin Private Music School (Part time) - Shenyang, LiaoNing, China",
                file: "address",
                children: [
                  {
                    id: 22,
                    name: "",
                    file: "item",
                    children: [],
                  },
                ],
              },
              {
                id: 20,
                name: "May 2015 - Present",
                file: "time",
                children: [
                  { id: 20, name: "May 2015 - Present", children: [] },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "Junior Music Teacher",
            file: "teaching",
            children: [
              {
                id: 23,
                name: "Shenyang National Music School (Part time) - Shenyang, LiaoNing, China",
                file: "address",
                children: [
                  {
                    id: 22,
                    name: "",
                    file: "item",
                    children: [],
                  },
                ],
              },
              {
                id: 20,
                name: "May 2015 - Present",
                file: "time",
                children: [
                  {
                    id: 20,
                    name: "May 2015 - Present",
                    file: "item",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Education :",
        file: "education",
        children: [
          {
            id: 24,
            name: "Bachelor Degree :",
            file: "education",
            children: [
              {
                id: 7,
                name: "Shenyang Convervatory of Music :",
                children: [
                  {
                    id: 8,
                    name: "Shenyang, Liaoning, China",
                    file: "address",
                    children: [
                      {
                        id: 25,
                        name: "Shenyang, Liaoning, China",
                        file: "item",
                      },
                    ],
                  },
                  {
                    id: 9,
                    name: "Sep 2016 - Jun 2019",
                    file: "time",
                    children: [
                      {
                        id: 26,
                        name: "Sep 2016 - Jun 2019",
                        file: "item",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }),
  computed: {
    expand: function () {
      return this.isExpand;
    },
  },
  methods: {
    expandTree() {
      this.isExpand = true;
      return this.isExpand;
    },
    closeTree() {
      this.isExpand = false;
      return this.isExpand;
    },
  },
};
</script>

<style scoped></style>
