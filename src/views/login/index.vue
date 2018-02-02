<template>
  <div class="login-container">
    <div class="headbg"></div>
    <div class="login_form">
      <div class="loginInpt">
        <input type="text" class="l_tel" placeholder="手机号">
        <input type="text" class="l_pwd" placeholder="请输入密码">
      </div>
      <mt-button type="primary" @click="login" class="loginBtn">登录</mt-button>
    </div>
    <div class="login_footnav">
      <a href="" class="fl">登录注册</a>
      <a href="" class="fr">忘记密码?</a>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  name: 'login',
  data() {
    return {
      loginForm: {
        username: 'yuling',
        password: '123456'
      },
      passwordType: 'password',
      loading: false
    }
  },
  methods: {
    login() {
      this.$router.push('home')
    }
  },
  created() {

  },
  destroyed() {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.login-container{
  height: 100%;
  .headbg{
    height: 300px;
    background: url('/src/assets/custom-theme/images/login_01.png') no-repeat center center;
    background-size: 100%;
  }
  .login_form{
    text-align: center;
    .loginInpt{
      height: 100px;
      background: url('/src/assets/custom-theme/images/login_02.png') no-repeat center center;
      background-size: 100%;
      position: relative;
      text-align: left;
      input{
        border: none;
        color: #777;
        height: 36px;
      }
      .l_tel{
        margin-top: 5px;
        margin-left: 35px;
      }
      .l_pwd{
        margin-top: 5px;
        margin-left: 35px;
      }
    }
    .loginBtn{
      width: 90%;
      background-color: #0061bf;
      margin-top: 20px;
    }
  }
  .login_footnav{
    width: 90%;
    margin: 10px auto;
  }
}
</style>
