<template>
  <div class="practice_layout">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'practiceLayout'
}
</script>

<style>

</style>
