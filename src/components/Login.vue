<template>
<div>
    <div class="head">
		<img class="logo" src="../../static/img/logo.png" />
		<p>办公系统</p>
	</div>
    <form class="form" @submit.prevent="submit($event)" name="form" id="form">
        <input type="text" name="username" id="username" v-model="user.username" class="username" placeholder="请输入用户名">
        <input type="password" name="password" id="password" v-model="user.password" class="password" placeholder="请输入密码">
        <input type="submit" name="submit" value="登录" class="submit">
        <input type="submit" value="重置" class="reset">
  </form>
  <MyFooter/>
  
</div>
</template>

<style>
@import '../../static/css/schoollogin.css';
</style>

<script>

import MyFooter from './Footer.vue'
import router from "../router"
export default {
  name: 'Login',
  components: {
    MyFooter
  },
  data(){
    return{
      user:{
        username:'',
        password:''
      }
    }
  },
   methods: {
    submit(event){
      // let param = new URLSearchParams()
      // param.append('username',this.username)
      // param.append('password',this.password)
      var _this = this
      var formData = new FormData(event.target)
      
      this.axios.post('/api/TeachSystem/LoginAction', formData,{
        emulateJSON: true
      },
      )
      .then(function (response) {
        if(response.data.Login){
            _this.$router.push("education")
        }else{
          alert("账号密码错误")
        }
        
      })
      .catch(function (error) {
        alert(error)
      })
    }
  }
}
</script>
