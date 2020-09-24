<template>
  <div class="cate-nav">
    <app-scroll :style="{height:data.length*50+'px'}">
      <ul>
        <li v-for="(item,index) in data"
            :class="{active:index===value}"
            @click="navItemAction(index)"
            :key="item.id">{{item.name}}</li>
      </ul>
    </app-scroll>
  </div>
</template>

<script>
export default {
  name: 'cate-nav',
  props: {
    data: Array,
    value: Number
  },
  methods: {
    navItemAction (index) {
      this.$emit('input', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-scroll {
  width: 80px;
  position: absolute;
  top: 0;
  left: 0;
  ul {
    padding-top: 25px;
    display: flex;
    flex-wrap: wrap;
    direction: column;
    li {
      box-sizing: border-box;
      width: 80px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      margin-bottom: 25px;
      font-size: 14px;
      color: #333;
      &.active {
        border-left: 2px solid rgb(223, 52, 52);
        color: rgb(223, 52, 52);
      }
    }
  }
}
</style>
