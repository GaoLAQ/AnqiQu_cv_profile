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
    videoDataBase: [
      {
        description:
          "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        source:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title: "Big Buck Bunny",
      },
      {
        description: "The first Blender Open Movie from 2006",
        source:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title: "Elephant Dream",
      },
      {
        description:
          "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
        source:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title: "For Bigger Blazes",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
