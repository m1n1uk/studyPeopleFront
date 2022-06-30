<template>
  <modal
    name="ModalPracticeCreate"
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
    <div>
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
          <input type="text" name="name" v-model="user.birthday">
        </li>
        <li>
          <strong>PhoneNumber : </strong>
          <input type="text" name="name" v-model="user.phone">
        </li>
      </ul>
      <div id="button-group">
        <button @click="happyCreate" class="btn btn_blue">CREATE</button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'ModalPracticeCreate',
  methods: {
    async happyCreate () {
      await this.$validator.validate().then(result => {
        if (result) {
          let data = this.user
          let apiURL = `${this.ENV_SAMPLE}/user-practice`
          this.$store.commit('showLoader')
          this.$http({
            method: 'post',
            url: apiURL,
            data: data
          }).then(result => {
            this.$store.dispatch('hideLoader')
            console.log(result.data.message)
            alert(result.data.message)
            // modal종료
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
    // 종료
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
  width: 300px;
}

#button-group{
  margin-top:25px;
}
</style>
