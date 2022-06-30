<template>
  <div class="practice_list">
    <div class="table_wrap">
      <div id="search-box">
        <div id="input-box">
          <div id="box-init">
            <input type="text" name="name" placeholder="USER_NAME" v-model="searchForm.name" @keyup.enter="searchList">
          </div>
          <div id="box-init">
            <input type="month" name="birthday" v-model="searchForm.birthday">
          </div>
        </div>
        <button class="btn btn_primary" @click="searchList">검색</button>
        <button class="btn btn_orange" @click="searchInit">초기화</button>
      </div>
      <button @click="showModal" class="btn btn_primary">Modal</button>
      <table>
          <caption>사용자 리스트</caption>
          <colgroup>
            <col style="width: 30rem">
            <col style="width: 30rem">
            <col style="width: 30rem">
          </colgroup>
          <thead>
            <tr>
              <th>이름</th>
              <th>생년월일</th>
              <th>번호</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in users" :key="index">
              <td @click="happyDetail(item.id)">{{ item.name }}</td>
              <td>{{ item.birthday }}</td>
              <td>{{ item.phone }}</td>
            </tr>
          </tbody>
        </table>
        <div id="button">
          <button class="btn btn_primary" @click="happyCreate">CREATE</button>
        </div>
    </div>
    <!-- <ModalPraceticeCreate /> -->
    <ModalSearchEmployee @callback-data="callbaclValue" />
  </div>
</template>

<script>
import ModalSearchEmployee from '../../../../components/ModalSearchEmployee'

export default {
  name: 'PrancticeList',
  components: {
    ModalSearchEmployee
  },
  created () {
    console.log(this.mixinUser.nameBase)
    this.getHappyList()
  },
  data () {
    return {
      users: {},
      searchForm: {
        name: '',
        birthday: ''
      }
    }
  },
  methods: {
    showModal () {
      this.$modal.show('ModalSearchEmployee')
    },
    callbaclValue (value) {
      console.info('value ', value)
    },
    async getHappyList () {
      let data = {}
      let apiURL = `${this.ENV_SAMPLE}/user-practice`
      this.$store.commit('showLoader')
      await this.$http({
        method: 'get',
        url: apiURL,
        data
      }).then(result => {
        this.users = result.data
      }).catch(error => {
        console.log(error)
      })
      this.$store.dispatch('hideLoader')
    },
    async happySearch () {
      await this.$validator.validate().then(result => {
        if (result) {
          let data = this.searchForm
          console.info('this.searchForm ', this.searchForm)
          let apiURL = `${this.ENV_SAMPLE}/user-practice/search`
          // let apiSearch = `?name=${this.searchForm.name}&birthday=${this.searchForm.birthday}`
          let apiSearch = location.search
          this.$store.commit('showLoader')
          this.$http({
            method: 'get',
            url: apiURL + apiSearch,
            data
          }).then(result => {
            this.users = result.data
          }).catch(error => {
            console.log(error)
          })
        } else {
          return this.COMMON.validateErrorMsg()
        }
      }).catch(error => {
        console.log(error)
      })
      this.$store.dispatch('hideLoader')
    },
    searchList (options) {
      let option = Object.assign({
        route: this.$route,
        router: this.$router,
        form: this.searchForm,
        callback: this.happySearch
      }, options)

      this.COMMON.searchPagination(option)
    },
    searchInit () {
      console.log('asd')
      this.searchForm = {
        name: '',
        birthday: ''
      }
    },
    happyDetail (id) {
      this.$router.push({
        name: 'PracticeDetail',
        params: {
          id
        }
      })
    },
    happyCreate () {
      this.$router.push({
        name: 'PracticeCreate'
      })
    }
  }
}
</script>

<style>
.btn{
  margin: 10px;
  width: 100px;
}

#button{
  display: flex;
  flex-direction: row-reverse;
  margin: 50px;
}

input{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 15px;
  height: 30px;
  color: darkgray;
  padding-left: 10px;
  border: 2px solid lightcoral;
}

#input-box{
  width: 380px;
  display: flex;
  justify-content: space-between;
}

#search-box{
  display: flex;
  margin-bottom: 15px;
}

#box-init{
  display: flex;
  justify-content: center;
  margin: auto;
}
</style>
