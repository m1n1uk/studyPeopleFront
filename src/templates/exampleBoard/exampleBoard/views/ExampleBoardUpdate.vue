<template>
  <div class="example_board_update">
    <div class="sticky_content">
      <div class="action_wrap sticky">
        <button class="btn btn_orange" @click="openModalConfirm">수정</button>
        <button class="btn btn_red" @click="openModalDelete">삭제</button>
        <button class="btn btn_gray" @click="mixinGoBack">목록으로</button>
      </div>
      <div class="form_wrap">
        <form action="post" @submit.prevent>
          <h3 class="form-title">게시글 수정</h3>
          <div class="row_wrap">
            <div class="row">
              <div class="column">
                <div class="label_wrap">
                  <label for="writer">사번</label>
                </div>
                <div class="keyword_wrap readonly">
                  <span>{{ updateForm.writer }}</span>
                </div>
              </div>
              <div class="column">
                <div class="label_wrap">
                  <label for="nameBase">이름</label>
                </div>
                <div class="keyword_wrap readonly">
                  <span>{{ updateForm.nameBase }}</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div class="label_wrap">
                  <label for="category">구분</label>
                </div>
                <div class="keyword_wrap">
                  <select name="category" id="category" v-model="updateForm.category">
                    <option value="">전체</option>
                    <option value="1">공지사항</option>
                    <option value="2">경조</option>
                  </select>
                </div>
              </div>
              <div class="column">
                <div class="label_wrap">
                  <label for="openRange">공개범위</label>
                </div>
                <div class="keyword_wrap">
                  <select name="openRange" id="openRange" v-model="updateForm.openRange">
                    <option value="">전체</option>
                    <option value="1">IT서비스본부</option>
                    <option value="2">인사팀</option>
                    <option value="3">채널지원팀</option>
                    <option value="4">FA</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column column--full" :class="{'error': errors.has('title')}">
                <div class="label_wrap">
                  <label for="title" class="required">제목</label>
                </div>
                <div class="keyword_wrap">
                  <input type="text" id="title" name="title" placeholder="title" v-validate="'required'" v-model="updateForm.title">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column column--full">
                <div class="label_wrap label_wrap--textarea">
                  <label for="content">내용</label>
                </div>
                <div class="keyword_wrap editor_wrap">
                  <vue-editor id="content" v-model="updateForm.content" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <ModalConfirm @onApprove="putExampleBoard">
      <div slot="content">수정하시겠습니까?</div>
    </ModalConfirm>
    <ModalDelete @onApprove="deleteExampleBoard()">
      <div slot="content">삭제하시겠습니까?</div>
    </ModalDelete>
  </div>
</template>

<script>
export default {
  name: 'ExampleBoardUpdate',
  created () {
    this.getExampleBoardDetail()
  },
  data () {
    return {
      updateForm: {}
    }
  },
  computed: {
    _id () {
      return this.$route.params.id
    }
  },
  methods: {
    openModalConfirm () {
      this.$modal.show('ModalConfirm')
    },
    openModalDelete () {
      this.$modal.show('ModalDelete')
    },
    getExampleBoardDetail () {
      let data = {}
      let apiURL = `${this.ENV_SAMPLE}/sample-board/board/${this._id}`
      this.$nextTick(() => {
        this.$http({
          method: 'get',
          url: apiURL,
          data
        }).then(result => {
          this.updateForm = result.data
        }).catch(error => {
          console.log(error)
        })
      })
    },
    putExampleBoard () {
      this.$validator.validate().then(result => {
        if (result) {
          let data = this.updateForm
          let apiURL = `${this.ENV_SAMPLE}/sample-board/put-board/${this._id}`
          this.$store.commit('showLoader')

          this.$http({
            method: 'put',
            url: apiURL,
            data: data
          }).then(result => {
            this.$store.dispatch('hideLoader')
            this.mixinGoBack()
          }).catch(error => {
            console.log(error)
          })
        } else {
          return this.COMMON.validateErrorMsg()
        }
      }).catch(error => {
        console.log(error)
      })
    },
    deleteExampleBoard () {
      let data = this.updateForm
      let apiURL = `${this.ENV_SAMPLE}/sample-board/delete-board/${this._id}`
      this.$store.commit('showLoader')

      this.$http({
        method: 'delete',
        url: apiURL,
        data: data
      }).then(result => {
        this.$store.dispatch('hideLoader')
        this.$toast.create({
          type: result.data.success,
          text: result.data.message
        })
        this.$store.dispatch('hideLoader')
        this.mixinGoBack()
      }).catch(error => {
        this.$toast.create({
          type: 'error',
          text: error.response.data.message
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sticky_content {
  width: calc(80rem);
}
</style>
