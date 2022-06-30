<template>
  <div class="example_board_layout">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ExampleBoardLayout'
}
</script>

<style>

</style>
