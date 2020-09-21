<template>
  <div class="category page">
    <!-- 头部 -->
    <header>
      <search-box />
    </header>

    <!-- 左边导航栏 -->
    <cate-nav :data="cateNavList"
              v-model="selectIndex" />
    <!-- 右边菜单栏 -->
    <cate-menu />

  </div>
</template>

<script>
import { mapState } from 'vuex'
import CateNav from './children/cate-nav'
import CateMenu from './children/cate-menu'
export default {
  name: 'category-page',
  components: {
    [CateNav.name]: CateNav,
    [CateMenu.name]: CateMenu
  },
  data () {
    return {
      id: '',
      selectIndex: 0
    }
  },
  computed: {
    ...mapState({
      cateNavList: state => state.category.cateNavList
    })
  },
  watch: {
    selectIndex (newVal) {
      const id = this.cateNavList[newVal].id
      this.$store.dispatch('category/getCateDataAction', { categoryId: id })
    }
  },
  created () {
    this.$store.dispatch('category/getCateDataAction', { categoryId: this.id })
  }
}
</script>

<style lang="scss" scoped>
.category {
  header {
    box-sizing: border-box;
    height: 44px;
    width: 100%;
    padding: 0 15px;
    border-bottom: 1px solid #cdcdcd;
  }
}
</style>
