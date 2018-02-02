<template>
  <mt-header fixed title="民革D家">
      <mt-button slot="left" icon="back" @click="goback" v-if="showBack">返回</mt-button>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
  export default {
    props: {
      popupVisible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        showBack: false
      }
    },
    methods: {
      goback() {
        this.$store.commit('SET_NAV_SHOW', true)
        this.$emit('setPopup', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-header{
    background-color: #0061bf;
    font-size: 14px;
    &.is-fixed{
      z-index: 9999;
    }
  }
</style>
