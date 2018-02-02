<template>
  <div class="menu-container">
    <div class="topInfo">
      <div class="communication_title fl"><i class="mintui icon-fi-communication-area"></i>民革交流圈</div>
      <div class="communication_num fr">今日<span>32</span></div>
    </div>
    <div class="mainList">
      <div class="title"></div>
      <ul class="mlist">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  name: 'navigation',
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
    }
  },
  created() {

  },
  destroyed() {
  }
}
</script>

<style lang="scss" scoped>
.menu-container{
  .topInfo{
    height: 100px;
    .communication_title{

    }
  }
}
</style>
