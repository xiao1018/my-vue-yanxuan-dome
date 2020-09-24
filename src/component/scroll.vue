<template>
  <div class="wrapper"
       ref="scroll">
    <div class="wrapper-content">
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
      click: true,
      tap: true
    })
    scroll.on('scrollStart', () => {
      scroll.refresh()
    })
  }
}
</script>

<style lang="scss">
.wrapper {
  overflow: hidden;
}
</style>
