<template>
  <div class="wrapper-scroll"
       ref="scroll">
    <div class="scroll">
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
      click: true
    })
    scroll.on('scrollStart', () => {
      scroll.refresh()
    })
  }
}
</script>

<style lang="scss">
.wrapper-scroll {
  overflow: hidden;
}
</style>
