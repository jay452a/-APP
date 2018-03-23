<template>
	<div id="app">
    <transition :name="transitionName">
		<router-view class="Router"></router-view>
    </transition>
	</div>
</template>

<script>
  export default{
    name: 'APP',
    data() {
      return {
        transitionName: 'slide-right'
      }
    },
    created() {},
    mounted() {},
    watch: {
      '$route'(to, from) {
        // 切换动画
        console.log(to, from, 56)
        const isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
        if (isBack) {
          this.transitionName = 'slide-right'
          /* from.meta.keepAlive = false
          to.meta.keepAlive = true */
          // console.log('退后不缓存from' + JSON.stringify(from.path))
          // console.log('退后缓存to' + JSON.stringify(to.path))
        } else {
          /*  from.meta.keepAlive = true
          to.meta.keepAlive = false */
          // console.log('前进缓存from' + JSON.stringify(from.path))
          // console.log('前进不缓存to' + JSON.stringify(to.path))
          if (this.$route.path.split('/').length < 3) {
            this.transitionName = 'slide-fade'
          } else {
            this.transitionName = 'slide-left'
          }
        }
        this.$router.isBack = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Router {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .377s ease;
    box-sizing: border-box;
    overflow: auto;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
</style>
