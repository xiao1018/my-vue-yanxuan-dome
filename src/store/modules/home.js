import { request, api } from '../../ajax'

const state = {
  total: 0,
  menuList: [],
  banner: [],
  cateList: []
}

const mutations = {
  setTotal (state, param) {
    state.total = param
  },
  steMenuList (state, param) {
    state.menuList = [{ id: 'tuijian', label: '推荐' }, ...param]
  },
  setIndexData (state, param) {
    state.banner = param.banner
    state.cateList = param.cateList
  }
}

const actions = {
  // 请求首页全部商品数量数据
  async getTotalAction (context) {
    const result = await request.get(api.GOODS_TOTAL_API)
    const total = result.data.data
    context.commit('setTotal', total)
  },
  // 请求首页菜单数据
  async getMenuAction (context) {
    const result = await request.get(api.HOME_MENU_API)
    const data = result.data.data.cateList.map(({ id, name }) => ({ id, label: name }))
    context.commit('steMenuList', data)
  },
  // 请求首页推荐数据
  async getIndexAction (context) {
    const result = await request.get(api.HOME_INDEX_API)
    const { focusList, kingKongModule } = result.data.data.data
    // 轮播图数据
    const banner = focusList.map(({ id, picUrl }) => ({ id, picUrl }))
    // 列表数据
    const cateList = kingKongModule.kingKongList.map(({ text, picUrl }) => ({ text, picUrl }))
    context.commit('setIndexData', { banner, cateList })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
