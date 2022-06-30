<template>
  <modal
    name="ModalSample"
    class="modal"
    adaptive
    reset
    draggable=".header_wrap"
    @opened="openEvent"
    @closed="closeEvent"
    :clickToClose="false"
    :width="_width"
    :height="_height"
    >

    <div class="header_wrap">
      <h3 class="header">Title</h3>
      <div class="closeButton" @click="$modal.hide('ModalSample')"></div>
    </div>
    <div class="content_wrap">
      <p>Content</p>
    </div>

  </modal>
</template>

<script>
export default {
  name: 'ModalSample',
  computed: {
    _width () { return parseFloat(this.width * 14) },
    _height () { return parseFloat(this.height * 14) }
  },
  data () {
    return {
      // rem 으로 작성
      width: '40',
      height: '30'
    }
  },
  methods: {
    openEvent (modal) { console.log(`open Modal: ${modal.name}`) },
    closeEvent (modal) { console.log(`close Modal: ${modal.name}`) }
  }
}
</script>

<style lang="scss" scoped>
</style>
