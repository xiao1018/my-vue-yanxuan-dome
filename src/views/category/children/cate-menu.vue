<template>
  <div class="cate-menu">
    <app-scroll>
      <!-- 轮播图 -->
      <div class="swiper-container banner"
           ref="banner"
           v-if="isBanner">
        <div class="swiper-wrapper">
          <div v-for="value in bannerList"
               :key="value.id"
               class="swiper-slide">
            <img :src="value.picUrl">
          </div>
        </div>
      </div>
      <div v-else
           class="banner">
        <img v-for="value in bannerList"
             :key="value.id"
             :src="value.picUrl" />
      </div>

      <!-- 菜单列表 -->
      <div v-for="item in cateMenuList"
           class="menu-list"
           :key="item.name">
        <h3 v-if="item.name">{{item.name}}</h3>
        <div class="menu-item">
          <dl v-for="value in item.categoryList"
              :key="value.id"
              class="item">
            <dt><img :src="value.wapBannerUrl"></dt>
            <dd>{{value.name}}</dd>
          </dl>
        </div>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swiper from 'swiper'
export default {
  name: 'cate-menu',
  props: {
    data: Array
  },
  data () {
    return {
      isBanner: true
    }
  },
  computed: {
    ...mapState({
      cateMenuList: state => state.category.cateMenuList,
      bannerList: state => state.category.bannerList
    })
  },
  watch: {
    bannerList (newVal) {
      if (newVal.length > 1) {
        this.isBanner = true
      } else {
        this.isBanner = false
      }
    }
  },
  updated () {
    /* eslint-disable no-new */
    new Swiper(this.$refs.banner, {
      loop: true
    })
  }
}
</script>

<style lang='scss' scoped>
.wrapper-scroll {
  width: 100%;
  height: 100%;
  .scroll {
    padding-bottom: 200px;
    .banner {
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
}
</style>
