<template>
  <div class="goList">
    <div class="btn_wrap">
      <button type="button" class="btn btn_gray" @click="mixinGoBack">목록으로</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoList',
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.goList, .btn_wrap {
  display: inline-block;
}
</style>
