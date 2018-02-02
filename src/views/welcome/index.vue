<template>
  <div class="welcome-container">
    <mt-swipe :auto="0">
      <mt-swipe-item class="slide1"></mt-swipe-item>
      <mt-swipe-item class="slide2" @click.native="enter"></mt-swipe-item>
    </mt-swipe>
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
    enter() {
      this.$router.push('login')
    }
  },
  created() {

  },
  destroyed() {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.welcome-container{
  height: 100%;
  .mint-swipe {
      height: 100%;
      color: #000;
      font-size: 30px;
      text-align: center;
      margin-bottom: 20px;
  }
  .mint-swipe-item {
      line-height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
  }
  .slide1 {
      background-image: url('/src/assets/custom-theme/images/welcome1.png');
  }
  .slide2 {
      background-image: url('/src/assets/custom-theme/images/welcome2.png');
  }
  .slide3 {
      background-image: url('/src/assets/custom-theme/images/welcome3.png');
  }
  .page-swipe-desc {
      text-align: center;
      color: #666;
      margin-bottom: 5px;
  }
}

.mint-swipe {
    overflow: hidden;
    position: relative;
    height: 100%;
}
.mint-swipe-items-wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
}
.mint-swipe-items-wrap > div {
    position: absolute;
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none
}
.mint-swipe-items-wrap > div.is-active {
    display: block;
    -webkit-transform: none;
            transform: none;
}
.mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    margin: 0 3px;
}
.mint-swipe-indicator.is-active {
    background: #fff;
}
</style>
