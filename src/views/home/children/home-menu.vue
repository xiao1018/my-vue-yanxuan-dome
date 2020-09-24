<template>
  <div class="home-menu">
    <!-- 横向菜单列表 -->
    <div>
      <ly-tab v-show="showMenu"
              :items="menuList"
              :value="value"
              @input="selectMenuItem"
              :options="{activeColor: '#b4282d'}">
      </ly-tab>

      <!-- 箭头 -->
      <div class="arrow">
        <div></div>
        <div @click="showMenuAction">
          <van-icon name="arrow-down" />
        </div>
      </div>
      <!-- 下拉列表 -->
      <div class="down-pull-menu"
           v-show="showMenu ===false">
        <h3>全部频道</h3>
        <ul>
          <li v-for="(item,index) in menuList"
              :key="item.id"
              :class="{active:value===index}"
              @click="selectMenuItem(index)"
              class="menu-item">{{item.label}}</li>
        </ul>
      </div>
    </div>
    <div class="shade"
         v-show="showMenu ===false"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home-menu',
  props: {
    value: Number
  },
  computed: {
    ...mapState({
      menuList: state => state.home.menuList
    })
  },
  data () {
    return {
      selectedId: 0,
      showMenu: true
    }
  },
  methods: {
    showMenuAction () {
      this.showMenu = !this.showMenu
    },
    selectMenuItem (index) {
      this.$emit('input', index)
      this.showMenu = true
    }
  },
  created () {
    this.$store.dispatch('home/getMenuAction')
  }
}
</script>

<style lang="scss" scoped>
.home-menu {
  .arrow {
    width: 60px;
    height: 32px;
    position: absolute;
    top: 44px;
    right: 0;
    display: flex;
    z-index: 10;
    div:nth-child(1) {
      width: 15px;
      height: 32px;
      background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff);
    }
    div:nth-child(2) {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
    }
  }
  .down-pull-menu {
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    z-index: 5;
    background: #fff;
    h3 {
      box-sizing: border-box;
      padding-left: 15px;
      width: 100%;
      height: 32px;
      line-height: 32px;
    }
    ul {
      box-sizing: border-box;
      padding-left: 15px;
      margin-top: 12px;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .menu-item {
        width: 20%;
        height: 24px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 20px;
        font-size: 12px;
        margin-right: 15px;
        border: 1px solid #fefefe;
        border-radius: 3px;
        background: #ccc;
        &.active {
          border: 1px solid #df5858;
          color: #df5858;
        }
      }
    }
  }
  .shade {
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>

<style>
.ly-tab-list {
  height: 32px;
  padding: 0 10px;
}
</style>
