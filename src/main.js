import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utilts from './utils'

<<<<<<< HEAD
import 'swiper/swiper-bundle.min.css'
=======
// css
import 'vant/lib/icon/local.css'
import 'swiper/dist/css/swiper.min.css'

>>>>>>> 525dfd4558e62639422d3301ed3a7d0f9d3d5637
Vue.use(utilts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
