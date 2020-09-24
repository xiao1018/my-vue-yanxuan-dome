import { request, api } from '../../ajax'

const state = {
  total: 0,
  cateNavList: [],
  cateMenuList: [],
  bannerList: []
}

const mutations = {
  setTotal (state, param) {
    state.total = param
  },
  setCateData (state, param) {
    state.cateNavList = param.cateNavList
    state.cateMenuList = param.cateMenuList
    state.bannerList = param.bannerList
  }
}

const actions = {
  // 获取全部商品数量
  async getTotalAction (context) {
    const data = await request.get(api.GOODS_TOTAL_API)
    const total = data.data.data
    context.commit('setTotal', total)
  },
  // 获取分类菜单列表数据
  async getCateDataAction (context, param) {
    const data = await request.get(api.CATE_LIST_API, param)
    const newData = data.data.data

    // 左边导航栏数据
    const cateNavList = newData.categoryL1List.map(({ id, name }) => ({ id, name }))

    // 右边菜单数据
    const cateMenuList = []
    newData.categoryGroupList.map(({ id, name, categoryList }) => {
      const cateList = categoryList.map(({ id, name, wapBannerUrl }) => ({ id, name, wapBannerUrl }))
      cateMenuList.push({ id, name, categoryList: cateList })
      return cateMenuList
    })

    // 右边菜单栏轮播图
    const bannerList = newData.currentCategory.bannerList.map(({ id, picUrl }) => ({ id, picUrl }))

    context.commit('setCateData', { cateNavList, cateMenuList, bannerList })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
