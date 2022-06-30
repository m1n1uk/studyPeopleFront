<template>
  <div id="contentLayout" class="clearfix">
    <Menu></Menu>

    <div class="contents_content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'ContentsLayout',
  components: {
    Menu
  },
  created () {
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.contents_content {
  margin: 0 calc(1rem + 1px);
}
</style>
