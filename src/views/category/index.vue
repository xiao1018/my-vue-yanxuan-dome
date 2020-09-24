<template>
  <div class="category page">
    <!-- 头部 -->
    <header>
      <search-box />
    </header>
    <div class="content">
      <!-- 左边导航栏 -->
      <cate-nav :data="cateNavList"
                v-model="selectIndex" />
      <!-- 右边菜单栏 -->
      <cate-menu />
    </div>
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

<style lang="scss" >
.category {
  header {
    box-sizing: border-box;
    height: 44px;
    width: 100%;
    padding: 0 15px;
    border-bottom: 1px solid #cdcdcd;
  }
  .content {
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 0;
    background: #fff;

    .cate-nav {
      box-sizing: border-box;
      width: 80px;
    }
    .cate-menu {
      box-sizing: border-box;
      position: absolute;
      left: 80px;
      top: 0;
      right: 0;
      bottom: 0;
      border-left: 1px solid #cdcdcd;
      padding: 15px;
    }
  }
}
</style>
