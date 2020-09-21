<template>
  <div class="wrapper"
       ref="scroll">
    <div class="wrapper-centent">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  mounted () {
    /* eslint-disable no-new */
    new BScroll(this.$refs.scroll, {
      click: true
    })
  }
}
</script>
