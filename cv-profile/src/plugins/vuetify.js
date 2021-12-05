import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

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
