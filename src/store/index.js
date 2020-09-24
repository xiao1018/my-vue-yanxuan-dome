import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import cart from './modules/cart'
import category from './modules/category'
import topic from './modules/topic'
import mine from './modules/mine'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    cart,
    category,
    topic,
    mine
  }
})
