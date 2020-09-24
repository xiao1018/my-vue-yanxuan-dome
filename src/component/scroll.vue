<template>
<<<<<<< HEAD
  <div class="wrapper"
       ref="scroll">
    <div class="wrapper-content">
=======
  <div class="wrapper-scroll"
       ref="scroll">
    <div class="scroll">
>>>>>>> 525dfd4558e62639422d3301ed3a7d0f9d3d5637
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'app-scroll',
  mounted () {
    /* eslint-disable no-new */
    const scroll = new BScroll(this.$refs.scroll, {
<<<<<<< HEAD
      click: true,
      tap: true
=======
      click: true
>>>>>>> 525dfd4558e62639422d3301ed3a7d0f9d3d5637
    })
    scroll.on('scrollStart', () => {
      scroll.refresh()
    })
  }
}
</script>

<style lang="scss">
<<<<<<< HEAD
.wrapper {
=======
.wrapper-scroll {
>>>>>>> 525dfd4558e62639422d3301ed3a7d0f9d3d5637
  overflow: hidden;
}
</style>
