<template>
  <div class="example_board_create">
    <div class="sticky_content">
      <div class="action_wrap sticky">
        <button class="btn btn_primary" @click="postExampleBoard">등록</button>
        <button class="btn btn_gray" @click="showModalExampleBoardPreview">미리보기</button>
        <button class="btn btn_gray" @click="mixinGoBack">취소</button>
      </div>
      <div class="form_wrap">
        <form action="post" @submit.prevent>
          <h3 class="form-title">게시글 등록</h3>
          <div class="row_wrap">
            <div class="row">
              <div class="column">
                <div class="label_wrap">
                  <label for="writer">사번</label>
                </div>
                <div class="keyword_wrap readonly">
                  <span>{{ createForm.writer }}</span>
                </div>
              </div>
              <div class="column">
                <div class="label_wrap">
                  <label for="nameBase">이름</label>
                </div>
                <div class="keyword_wrap readonly">
                  <span>{{ createForm.nameBase }}</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div class="label_wrap">
                  <label for="category">구분</label>
                </div>
                <div class="keyword_wrap">
                  <select name="category" id="category" v-model="createForm.category">
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
                  <select name="openRange" id="openRange" v-model="createForm.openRange">
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
                  <input type="text" id="title" name="title" placeholder="title" v-model="createForm.title" v-validate="'required'">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column column--full">
                <div class="label_wrap label_wrap--textarea">
                  <label for="content">내용</label>
                </div>
                <div class="keyword_wrap editor_wrap">
                  <vue-editor id="content" v-model="createForm.content" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <ModalExampleBoardPreview>
      <div slot="title">{{ createForm.title === '' ? '제목이 입력되지 않았습니다.' : createForm.title }}</div>
      <div slot="content">{{ createForm.content === '' ? '내용이 입력되지 않았습니다.' : createForm.content }}</div>
    </ModalExampleBoardPreview>
  </div>
</template>

<script>
import ModalExampleBoardPreview from '../components/ModalExampleBoardPreview.vue'

export default {
  name: 'ExampleBoardCreate',
  created () {},
  components: {
    ModalExampleBoardPreview
  },
  computed: {
    _date () {
      return this.date.getDate()
    }
  },
  data () {
    return {
      createForm: {
        writer: this.$store.getters.getUser.employeeNumber,
        nameBase: this.$store.getters.getUser.nameBase,
        category: '',
        openRange: '',
        title: '',
        content: ''
      }
    }
  },
  methods: {
    showModalExampleBoardPreview () {
      this.$modal.show('ModalExampleBoardPreview')
    },
    postExampleBoard () {
      this.$validator.validate().then(result => {
        if (result) {
          let data = this.createForm
          let apiURL = `${this.ENV_SAMPLE}/sample-board/post-board`
          this.$store.commit('showLoader')

          this.$http({
            method: 'post',
            url: apiURL,
            data: data
          }).then(result => {
            this.$toast.create({
              type: result.data.success,
              text: result.data.message
            })
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
    }
  }
}
</script>

<style lang="scss" scoped>
.sticky_content {
  width: calc(80rem);
}
</style>
