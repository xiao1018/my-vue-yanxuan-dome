<template>
  <div id="app">
    <router-view />
    <app-tabs />
  </div>
</template>

<script>
import Tabs from './component/tabs'
export default {
  components: {
    [Tabs.name]: Tabs
  }
}
</script>

<style lang="scss">
</style>
