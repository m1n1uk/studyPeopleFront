<template>
  <modal
    name="ModalExampleBoardDetail"
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
      <span class="title">{{ detailForm.title }}</span>
      <div class="closeButton" @click="$modal.hide('ModalExampleBoardDetail')"></div>
    </div>
    <div class="content_wrap">
      <span class="content">{{ detailForm.content }}</span>
      <slot name="content" v-if="$slots.content"></slot>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'ModalExampleBoardDetail',
  created () {
  },
  props: {
    boardId: {
      type: String
    }
  },
  computed: {
    _width () {
      return parseFloat(this.width * 14)
    },
    _id () {
      return this.boardId
    }
  },
  data () {
    return {
      width: '40',
      detailForm: {}
    }
  },
  watch: {},
  methods: {
    openEvent (modal) { console.log(`open Modal: ${modal.name}`) },
    closeEvent (modal) { console.log(`close Modal: ${modal.name}`) },
    getExampleBoardDetail () {
      let data = {}
      let apiURL = `${this.ENV_SAMPLE}/sample-board/board/${this._id}`
      this.$nextTick(() => {
        this.$http({
          method: 'get',
          url: apiURL,
          data
        }).then(result => {
          this.detailForm = result.data
          this.putExampleBoardViewCount()
        }).catch(error => {
          console.log(error)
        })
      })
    },
    putExampleBoardViewCount () {
      let data = this.detailForm
      let apiURL = `${this.ENV_SAMPLE}/sample-board/put-view-count/${this._id}`
      this.$http({
        method: 'put',
        url: apiURL,
        data: data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header_wrap {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
