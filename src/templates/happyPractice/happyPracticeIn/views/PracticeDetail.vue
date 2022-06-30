<template>
  <div>
    <!-- <form action="post" @submit.prevent> -->
      <ul>
        <li>
          <img class="img" src="../../../../assets/logo.png">
        </li>
        <li>
          <strong>NAME : </strong>
          <input type="text" name="name" v-model="user.name">
        </li>
        <li>
          <strong>BirthDay : </strong>
          <input type="text" name="birthday" v-model="user.birthday">
        </li>
        <li>
          <strong>PhoneNumber : </strong>
          <input type="text" name="phone" v-model="user.phone">
        </li>
      </ul>
      <div id="button-group">
        <button @click="happyUpdate" class="btn btn_blue">UPDATE</button>
        <button @click="happyDelete" class="btn btn_orange">DELETE</button>
        <!-- <button @click="happyDelete" class="btn btn_orange">DELETE</button> -->
      </div>
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  name: 'PracticeDetail',
  created () {
    this.getHappyDetail()
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    async getHappyDetail () {
      let data = {}
      let apiURL = `${this.ENV_SAMPLE}/user-practice/${this.id}`
      // this.$store.commit('showLoader')
      this.$nextTick(() => {
        this.$http({
          method: 'get',
          url: apiURL,
          data
        }).then(result => {
          this.user = result.data
        }).catch(error => {
          console.log(error)
        })
      })
    },
    async happyUpdate () {
      await this.$validator.validate().then(result => {
        if (result) {
          let data = this.user
          let apiURL = `${this.ENV_SAMPLE}/user-practice`
          this.$store.commit('showLoader')
          this.$http({
            method: 'put',
            url: apiURL,
            data: data
          }).then(result => {
            this.$store.dispatch('hideLoader')
            this.goList()
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
    async happyDelete () {
      await this.$validator.validate().then(result => {
        if (result) {
          // let data = this.user
          let apiURL = `${this.ENV_SAMPLE}/user-practice/${this.id}`
          this.$store.commit('showLoader')
          this.$http({
            method: 'delete',
            url: apiURL
            // data: data
          }).then(result => {
            this.$store.dispatch('hideLoader')
            this.goList()
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
    goList () {
      this.$router.push({
        name: 'PracticeList'
      })
      // 이전화면으로 이동하는 메서드
      // this.$router.go(-1)
    }
  }
}
</script>

<style>
.img{
  opacity: 0.7;
  border-radius: 50%;
  background: orange;
}

input{
  font-weight: bold;
  color: gray;
  margin-top:10px;
}

button{
  margin-left:20px;
}

#button-group{
  margin-top:25px;
}
</style>
