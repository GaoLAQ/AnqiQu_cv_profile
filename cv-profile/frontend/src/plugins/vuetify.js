import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import 'vuetify/dist/vuetify.min.css';
import AudioPlayer from '@liripeng/vue-audio-player'
import '@liripeng/vue-audio-player/lib/vue-audio-player.css'

Vue.use(Vuetify);
Vue.use(AudioPlayer)

export default new Vuetify({
   theme: {
    themes: {
      dark: {
        primary: '#1e1e1e',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
