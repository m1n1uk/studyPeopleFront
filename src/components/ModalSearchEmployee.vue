<template>
  <modal
    name="ModalSearchEmployee"
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
        <slot name="title" class="title" v-if="$slots.title" />
        <span class="title">사원 검색</span>
        <div class="closeButton" @click="$modal.hide('ModalSearchEmployee')" />
      </div>
      <div class="content_wrap">
        <slot name="content" v-if="$slots.content" />
        <form action="post" @submit.prevent>
          <div class="row_wrap">
            <div class="row">
              <div class="column">
                <div class="label_wrap">
                  <label for="employeeNumber">사원번호</label>
                </div>
                <div class="keyword_wrap">
                  <input type="text" id="employeeName" name="employeeName" placeholder="사번" v-model="searchForm.employeeNumber" @keyup.enter="searchList">
                </div>
              </div>
              <div class="column">
                <div class="label_wrap">
                  <label for="nameBase">이름</label>
                </div>
                <div class="keyword_wrap">
                  <input type="text" id="nameBase" name="nameBase" placeholder="이름" v-model="searchForm.nameBase" @keyup.enter="searchList">
                </div>
              </div>
            </div>
            <div class="row">
              <button class="btn btn_primary" @click="searchList">검색</button>
            </div>
          </div>
        </form>
        <div class="table_wrap">
          <table>
            <colgroup>
              <col style="width: 10%">
              <col style="width: 10%">
              <col style="width: 10%">
              <col style="width: 70%">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">사원번호</th>
                <th scope="col">이름</th>
                <th scope="col">직책</th>
                <th scope="col">부서</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in employees" :key="index">
                <td>{{ item.employeeNumber }}</td>
                <td>{{ item.nameBase }}</td>
                <td>{{ item.codeTitle.codeName }}</td>
                <td>{{ item.newDept.deptPathName }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button class="btn btn_primary" @click="selectUser">선택</button>
      </div>
    </modal>
</template>

<script>
export default {
  name: 'ModalSearchEmployee',
  computed: {
    _width () {
      return parseFloat(this.width * 14)
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      width: '60',
      employees: [],
      searchForm: {
        employeeNumber: '',
        nameBase: ''
      },
      callbackValue: {
        employeeNumber: '',
        nameBase: ''
      }
    }
  },
  watch: {
    visible (val) {
      if (!val) {
        this.employees = []
      }
    }
  },
  methods: {
    openEvent (modal) {
      console.log(`open Modal: ${modal.name}`)
    },
    closeEvent (modal) {
      console.log(`close Modal: ${modal.name}`)
      this.$emit('update:visible', false)
      this.searchInit()
    },
    async getEmployee () {
      let data = {}

      let apiURL = `${this.ENV_PINES}/pines/member/employees`
      let apiSearch = `?employeeNumber=${this.searchForm.employeeNumber}&nameBase=${this.searchForm.nameBase}`
      this.$store.commit('showLoader')

      await this.$http({
        method: 'get',
        url: apiURL + apiSearch,
        data: data
      }).then(result => {
        this.employees = result.data.contents
        this.$store.dispatch('hideLoader')
      }).catch(error => {
        console.error(error)
      })
    },
    searchList (options) {
      let option = Object.assign({
        route: this.$route,
        router: this.$router,
        form: this.searchForm,
        callback: this.getEmployee
      }, options)

      this.COMMON.searchPagination(option)
    },
    searchInit () {
      this.searchForm = {
        employeeNumber: '',
        nameBase: ''
      }
    },
    selectUser () {
      this.callbackValue = {
        employeeNumber: this.employees[0].employeeNumber,
        nameBase: this.employees[0].nameBase
      }
      this.$emit('callback-data', this.callbackValue)
      this.$modal.hide('ModalSearchEmployee')
      this.$emit('update:visible', false)
      this.searchInit()
      this.employees = []
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
