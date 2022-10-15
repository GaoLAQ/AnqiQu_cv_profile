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
      content:
        "A well-qualified and inspirational graduate student who can not only have a solid understanding of musical theory and aims to develop more knowledge of music composition. Anqi has excellent skills playing a range of music instruments including piano, guitar and Guzheng(Chinese traditional instrument), she likes to create background music for video games and movies. Right now, she is looking for a chance to have any intership experience become part of team in any Music department/ company studio",
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
    cv: {
      work: {
        header: [
          {
            text: "Date",
            align: "start",
            sortable: false,
            value: "date",
          },
          { text: "Role", value: "role" },
          { text: "Company", value: "company" },
          { text: "Location", value: "location" },
          { text: "Duration", value: "duration" },
        ],
        items: [
          {
            date: "Sep 2020 - Present",
            role: "Senior Music Teacher",
            company: "Liyin Private Music School",
            location: "Shenyang,Liaoning,China",
            duration: 24,
            content: "aaaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            date: "Jan 2020 - Sep 2022",
            role: "Junior Music Teacher",
            company: "Shenyang National Music School",
            location: "Shenyang, Liaoning, China",
            duration: 24,
            content: "aaaaaaaaaaaaaaaaaaaaaaa",
          },
        ],
      },
      education: {
        header: [
          {
            text: "Date",
            align: "start",
            sortable: false,
            value: "date",
          },
          { text: "Title", value: "title" },
          { text: "Location", value: "location" },
          { text: "Duration", value: "duration" },
        ],
        items: [
          {
            date: "Sep 2020 - Oct 2022",
            title: "Bachelor Degree",
            location: "Shenyang, Liaoning, China",
            duration: 24,
            content: "bbbbbbbbbbbbbbb",
          },
          {
            date: "Sep 2020 - Oct 2022",
            title: "A-level",
            location: "Shenyang, Liaoning, China",
            duration: 24,
            content: "bbbbbbbbbbbbbbb",
          },
        ],
      },
      activity: {
        header: [
          {
            text: "Date",
            align: "start",
            sortable: false,
            value: "date",
          },
          { text: "Location", value: "location" },
          { text: "Name", value: "name" },
        ],
        items: [
          {
            date: "Sep 2020 - Present",
            location: "Shenyang,Liaoning,China",
            name: 24,
            content: "aaaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            date: "Sep 2020 - Present",
            location: "Shenyang,Liaoning,China",
            name: 24,
            content: "aaaaaaaaaaaaaaaaaaaaaaa",
          },
        ],
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
