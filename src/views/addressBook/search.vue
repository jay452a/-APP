<template>
  <section>
    <nav class="nav2">
      <span :class="{active: active2==='tab1'}" @click = "tabNav('tab1')">
          <p>联系人</p>
      </span>
      <span :class="{active: active2==='tab2'}" @click = "tabNav('tab2')">
          <p>党组织</p>
      </span>
      <span :class="{active: active2==='tab3'}" @click = "tabNav('tab3')">
          <p>标签</p>
      </span>
      <i class="underline" ref="underline"></i>
    </nav>
    <mt-tab-container v-model="active2" :swipeable="true" class="content">
      <mt-tab-container-item id="tab1">
        <SearchLink></SearchLink>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
       <SearchOrganize></SearchOrganize>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <SearchLabel></SearchLabel>
      </mt-tab-container-item>
    </mt-tab-container>
  </section>
</template>
<script>
  import SearchLink from './components/searchLinker.vue'
  import SearchOrganize from './components/searchOrganize.vue'
  import SearchLabel from './components/searchLabel.vue'
  export default{
    data() {
      return {
        active2: 'tab1'
      }
    },
    methods: {
      underlineMove(val) {
        if (val === 'tab1') {
          this.$refs.underline.style.left = '0'
        } else if (val === 'tab2') {
          this.$refs.underline.style.left = '20%'
        } else {
          this.$refs.underline.style.left = '40%'
        }
      },
      tabNav(tab) {
        this.active2 = tab
      }
    },
    watch: {
      active2(val) {
        this.underlineMove(val)
      }
    },
    components: {
      SearchLink,
      SearchOrganize,
      SearchLabel
    }
  }
</script>
<style lang="scss" scoped>
  nav{
    display: flex;
    background: white;
    padding: 10px 0;
    span{
      width: 25%;
      text-align: center;
      //min-height:40px;
      label{
        width: 40px;
        height:40px;
        border-radius: 50%;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        background: red;
        margin-bottom: 10px;
      }
      label.linkNearly{
        background: #82ca81;
      }
      label.myBranch{
        background: #65b2fa;
      }
      label.myOrganize{
        background: #eba853;
      }
      label.mobile{
        background: #f27c78;
      }
      i{
        font-size: 20px;
        color: white;
        vertical-align: sub;
      }
    }
    span.active{
      color: #0061bf;
      label{
        background: #0061bf;
      }
    }
  }
  .nav2{
    padding:0;
    position: relative;
    span{
      height: auto;
      width: 20%;
      padding: 15px 0;
    }
    i.underline{
      position: absolute;
      left:0;
      width: 20%;
      bottom: 0;
      height: 2px;
      background: #0061bf;
      transition: all 0.3s;
    }
  }
  .content{
    min-height: 300px;
  }
</style>
