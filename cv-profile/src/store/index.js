import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: {
      configTitle: [
        {
          name: "Home",
          url: "/",
        },
        // {
        //   name: "Music",
        //   url: "/music",
        // },
        {
          name: "Videos",
          url: "/videos",
        },
        {
          name: "CV",
          url: "/anqiCv",
        },
      ],
      configContent:
        "I was a music graduated student and willing to become a composer in future; fascinated by screen music, She want to bring her dynamic passion to create inspiring musical worlds. She is now in London.",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
