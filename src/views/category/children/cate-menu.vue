<template>
  <div class="cate-menu">
    <scroll>
      <!-- 轮播图 -->
      <div class="menu-banner">
        <img :src="item.picUrl"
             alt=""
             v-for="item in bannerList"
             :key="item.id">
      </div>
      <!-- 菜单列表 -->
      <div v-for="item in cateMenuList"
           class="menu-list"
           :key="item.name">
        <h3 v-show="item.name !== ''">{{item.name}}</h3>
        <div class="menu-item">
          <dl v-for="value in item.categoryList"
              :key="value.id"
              class="item">
            <dt><img :src="value.wapBannerUrl"></dt>
            <dd>{{value.name}}</dd>
          </dl>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'cate-menu',
  props: {
    data: Array
  },
  computed: {
    ...mapState({
      cateMenuList: state => state.category.cateMenuList,
      bannerList: state => state.category.bannerList
    })
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  position: absolute;
  left: 80px;
  top: 44px;
  right: 0;
  bottom: 0;
  padding: 15px;
  overflow: hidden;
  border-left: 1px solid #cdcdcd;

  .menu-banner {
    width: 100%;
    height: 100px;
    margin-bottom: 15px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .menu-list {
    h3 {
      height: 24px;
      padding-left: 5xp;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid #cdcdcd;
    }
    .menu-item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 33.33%;
        margin: 15px 0;
        dt {
          width: 100%;
          height: 70px;
          text-align: center;
          img {
            width: 70px;
            height: 100%;
          }
        }
        dd {
          height: 20px;
          line-height: 20px;
          text-align: center;
          font-size: 12px;
          margin: 5px 0;
        }
      }
    }
  }
}
</style>
