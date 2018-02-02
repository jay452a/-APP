<template>
  <div class="index">
    <headbar :popupVisible="popupVisible" v-on:setPopup="setPopup"></headbar>

    <section class="main">
      <router-view></router-view>
    </section>

    <footnav v-if="'home|navigation'.indexOf($route.name) !== -1"></footnav>
  </div>
</template>

<script>
import { Headbar, Footnav } from '@/components/layout'

export default {
  name: 'index',
  components: {
    Headbar,
    Footnav
  },
  data() {
    return {
      appList: [],
      fnData: [],
      url: '',
      popupVisible: false
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    setPopup() {}
  }
}
</script>

<style lang="scss" scoped>
.index{
  .main{
    position: absolute;
    top: 40px;
    bottom: 45px;
    left: 0;
    right: 0;
  }
}
</style>
