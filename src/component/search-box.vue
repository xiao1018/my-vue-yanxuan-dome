<template>
  <div class="search-box">
    <div class="Search-content">
      <van-icon name="search"
                size="20" />
      <span>搜索商品, 共 {{total}} 件好物</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'search-box',
  computed: {
    ...mapState({
      total: state => state.category.total
    })
  },
  created () {
    this.$store.dispatch('category/getTotalAction')
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .Search-content {
    flex: 1;
    height: 28px;
    background-color: #ededed;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: #666;
      font-size: 14px;
      margin-left: 5px;
    }
  }
}
</style>
