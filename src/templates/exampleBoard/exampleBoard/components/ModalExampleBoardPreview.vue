<template>
  <modal
    name="ModalExampleBoardPreview"
    class="modal"
    adaptive
    reset
    draggable=".header_wrap"
    @opened="openEvent"
    @closed="closeEvent"
    :clickToClose="false"
    :width="_width"
    :height="'auto'"
    >

    <div class="header_wrap">
      <slot name="title" class="title" v-if="$slots.title"></slot>
      <div class="closeButton" @click="$modal.hide('ModalExampleBoardPreview')"></div>
    </div>
    <div class="content_wrap">
      <slot name="content" v-if="$slots.content"></slot>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'ModalExampleBoardPreview',
  computed: {
    _width () { return parseFloat(this.width * 14) }
  },
  data () {
    return {
      // rem 으로 작성
      width: '35'
    }
  },
  methods: {
    openEvent (modal) { console.log(`open Modal: ${modal.name}`) },
    closeEvent (modal) { console.log(`close Modal: ${modal.name}`) }
  }
}
</script>

<style lang="scss" scoped>
.header_wrap {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
