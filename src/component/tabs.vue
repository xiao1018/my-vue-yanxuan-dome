<template>
  <div class="tabs border-top">
    <router-link v-for="item in tabData"
                 class="tab"
                 :to="`/${item.id}`"
                 :key="item.id">
      {{item.title}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'app-tabs',
  data () {
    return {
      tabData: [
        { title: '首页', id: 'home' },
        { title: '分类', id: 'category' },
        { title: '识物', id: 'topic' },
        { title: '购物车', id: 'cart' },
        { title: '我的', id: 'mine' }
      ]
    }
  }
}
</script>

<style lang="scss">
.tabs {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  .tab {
    width: 20%;
    height: 49px;
    line-height: 49px;
    text-align: center;
  }
}
</style>
