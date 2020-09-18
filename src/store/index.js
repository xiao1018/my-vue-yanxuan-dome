import Vue from 'vue'
import Vuex from 'vuex'

import homeStore from './modules/home'
import cartStore from './modules/cart'
import categoryStore from './modules/category'
import topicStore from './modules/topic'
import mineStore from './modules/mine'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homeStore,
    cartStore,
    categoryStore,
    topicStore,
    mineStore
  }
})
