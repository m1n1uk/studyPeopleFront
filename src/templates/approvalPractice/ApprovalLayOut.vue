<template>
  <div class="approval_lay_out">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ApprovalLayOut'
}
</script>

<style>

</style>
