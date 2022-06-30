<template>
  <div class="home">
    <router-link tag="a" class="headerLogo" :to="{name: 'Main'}">Vue-study-project</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  padding: 10%;
  text-align: center;
}
</style>
