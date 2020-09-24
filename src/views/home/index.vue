<template>
  <div class="home page">

    <!-- 头部 -->
    <header>
      <h1>网易严选</h1>
      <div class="topSearch">
        <van-icon name="search"
                  :style="{fontSize:'20px'}" />
        <span>搜索商品, 共{{total}}件好物</span>
      </div>
      <div class='button'>登入</div>
    </header>

    <!-- 菜单 -->
    <home-menu v-model="selectedId" />

    <!-- content -->
    <div class="home-content">
      <top-content v-if="selectedId === 0" />
      <menu-content v-else />
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomeMenu from './children/home-menu'
import MenuContent from './children/menu-content'
import TopContent from './children/top-content'
export default {
  name: 'home-page',
  components: {
    [HomeMenu.name]: HomeMenu,
    [MenuContent.name]: MenuContent,
    [TopContent.name]: TopContent
  },
  data () {
    return {
      selectedId: 0
    }
  },
  computed: {
    ...mapState({
      total: state => state.home.total
    })
  },
  created () {
    this.$store.dispatch('home/getTotalAction')
  }
}
</script>

<style lang="scss" spaced>
.home {
  header {
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    background: white;
    padding: 8px 15px;
    display: flex;
    align-items: center;
    h1 {
      float: left;
      height: 28px;
      line-height: 28px;
      font-size: 16px;
      margin-right: 15px;
    }
    .topSearch {
      flex: 1;
      height: 28px;
      background: #e0e0e0;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 14px;
        margin-left: 5px;
      }
    }
    .button {
      float: right;
      width: 36px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      font-size: 13px;
      margin-left: 10px;
      border-radius: 3px;
      border: 1px solid #dd1a21;
      color: #dd1a21;
    }
  }
  .home-content {
    width: 100%;
    position: absolute;
    top: 76px;
    left: 0;
    bottom: 0;
  }
}
</style>
