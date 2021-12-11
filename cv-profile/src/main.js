import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import AudioVisual from 'vue-audio-visual'
import { Plugin } from 'vue-responsive-video-background-player'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(AudioVisual);
Vue.use(Plugin);
Vue.use(VueAxios, axios)

new Vue({
  vuetify,
  router,
  AudioVisual,
  Plugin,
  render: h => h(App)
}).$mount('#app')
