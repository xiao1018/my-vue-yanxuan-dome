<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <img v-for="item in bannerList"
           :key="item.id"
           :src="item.picUrl"
           class="swiper-pic"
           alt="">
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'app-swiper',
  props: {
    bannerData: Array
  },
  data () {
    return {
      bannerList: []
    }
  },
  watch: {
    bannerData (newVal) {
      this.bannerList = newVal
      this.$nextTick(() => {
        this.mySwiper && this.mySwiper.update()
      })
    }
  },
  mounted () {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: '.swiper-pagination'
    })
  }
}
</script>

<style lang="scss">
.swiper-container {
  overflow: hidden;
  .swiper-pic {
    width: 100%;
    height: 100%;
  }
}
</style>
