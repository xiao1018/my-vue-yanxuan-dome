import { Icon } from 'vant'
<<<<<<< HEAD
import LyTab from 'ly-tab'
import VueSwiper from 'vue-awesome-swiper'
import Scroll from '../component/scroll.vue'
=======
import SearchBox from '../component/search-box.vue'
import Scroll from '../component/scroll.vue'
import Swiper from '../component/app-swiper.vue'
>>>>>>> 525dfd4558e62639422d3301ed3a7d0f9d3d5637

export default {
  install (Vue) {
    // 注册全局组件
    Vue.component(Icon.name, Icon)
<<<<<<< HEAD
    Vue.component(Scroll.name, Scroll)

    // 注册全局插件
    Vue.use(LyTab)
    Vue.use(VueSwiper)
=======
    Vue.component(SearchBox.name, SearchBox)
    Vue.component(Scroll.name, Scroll)
    Vue.component(Swiper.name, Swiper)
>>>>>>> 525dfd4558e62639422d3301ed3a7d0f9d3d5637
  }
}
