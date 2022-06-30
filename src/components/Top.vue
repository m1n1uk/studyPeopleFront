<template>
  <div id="top">
    <div class="top_inner">
      <router-link tag="h1" class="topTitle" to="/">vue-study-project</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

#top {
  min-height: 1rem;
  padding: 1rem 0;
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
}
.top_inner {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;

  .topTitle {
    cursor: pointer;
    color: #434343;
    font-weight: bolder;
    font-size: 1.6rem;
  }
}
</style>
