import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'
import '@/assets/css/main.css'
import router from './router.js'

import Header from '@/components/Header.vue'
Vue.component('Header', Header)
import TitleText from '@/components/TitleText.vue'
Vue.component('TitleText', TitleText)
import Foot from '@/components/Foot.vue'
Vue.component('Foot', Foot)

import animated from 'animate.css'
Vue.use(animated)

import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video

import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
