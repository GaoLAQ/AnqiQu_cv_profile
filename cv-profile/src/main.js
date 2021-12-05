import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import AudioVisual from 'vue-audio-visual'

Vue.config.productionTip = false
Vue.use(AudioVisual)

new Vue({
  vuetify,
  router,
  AudioVisual,
  render: h => h(App)
}).$mount('#app')
