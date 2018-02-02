<template>
  <ul class="foot-nav common" id="footNav">
    <router-link tag="li" :to="{ path: '/home'}">
      <i class="mintui icon-fi-politics"></i>
      <p>首页</p>
    </router-link>
    <router-link tag="li" :to="{ path: '/message'}">
      <i class="mintui icon-fi-message-linear"></i>
      <p>消息</p>
    </router-link>
    <router-link tag="li" :to="{ path: '/addressBook'}">
      <i class="mintui icon-fi-ipa-linear"></i>
      <p>通讯录</p>
    </router-link>
    <router-link tag="li" :to="{ path: '/member'}">
      <i class="mintui icon-fi-mine-linear"></i>
      <p>我的</p>
    </router-link>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      }
    },
    methods: {
      selected(name) {
        return this.$route.name === name
      }
    }
  }
</script>

<style lang="scss" scoped>
  .foot-nav {
    background: #FFFFFF;
    position: fixed;
    left: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    border-top:1px solid #DDDDDD ;
    display: -webkit-box;
    z-index: 9999;
    li {
      -moz-box-flex: 1;
      -webkit-box-flex:1;
      text-align: center;
      &.router-link-active{
        color: #0061bf;
      }
      img {
        width: 20px;
        height: 20px;
      }
      p {
        margin-top: 3px;
        font-size: 11px;
      }
    }
  }
</style>
