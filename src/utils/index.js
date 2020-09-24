import { Icon } from 'vant'
import LyTab from 'ly-tab'
import VueSwiper from 'vue-awesome-swiper'
import Scroll from '../component/scroll.vue'

export default {
  install (Vue) {
    // 注册全局组件
    Vue.component(Icon.name, Icon)
    Vue.component(Scroll.name, Scroll)

    // 注册全局插件
    Vue.use(LyTab)
    Vue.use(VueSwiper)
  }
}
