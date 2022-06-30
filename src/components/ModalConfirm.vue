<template>
  <modal
    name="ModalConfirm"
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
      <h3 class="header">확인</h3>
      <div class="closeButton" @click="$modal.hide('ModalConfirm')"></div>
    </div>
    <div class="content_wrap">
      <slot name="content" v-if="$slots.content"></slot>
      <div class="btn_wrap">
        <button type="button" class="btn btn_primary" @click="onApprove()">예</button>
        <button type="button" class="btn btn_red" @click="$modal.hide('ModalConfirm')">아니요</button>
      </div>
    </div>

  </modal>
</template>

<script>
export default {
  name: 'ModalConfirm',
  computed: {
    _width () { return parseFloat(this.width * 14) },
    _height () { return parseFloat(this.height * 14) }
  },
  data () {
    return {
      // rem 으로 작성
      width: '25',
      height: '15'
    }
  },
  methods: {
    openEvent (modal) { console.log(`open Modal: ${modal.name}`) },
    closeEvent (modal) { console.log(`close Modal: ${modal.name}`) },
    onApprove () {
      this.$emit('onApprove')
      this.$modal.hide('ModalConfirm')
    }
  }
}
</script>

<style lang="scss" scoped>
.content_wrap {
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1.3rem;
  button{
    margin-top: 1.6rem;
  }
}
</style>
