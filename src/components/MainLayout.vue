<template>
  <div id="mainLayout" class="clearfix">
    <Menu></Menu>

    <div class="main_content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'MainLayout',
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
.main_content {
  margin: 0 calc(1rem + 1px);
}
</style>
