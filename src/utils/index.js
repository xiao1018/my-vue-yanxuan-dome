import { Icon } from 'vant'
import SearchBox from '../component/search-box.vue'
import Scroll from '../component/scroll.vue'
import Swiper from '../component/app-swiper.vue'

export default {
  install (Vue) {
    // 注册全局组件
    Vue.component(Icon.name, Icon)
    Vue.component(SearchBox.name, SearchBox)
    Vue.component(Scroll.name, Scroll)
    Vue.component(Swiper.name, Swiper)
  }
}
