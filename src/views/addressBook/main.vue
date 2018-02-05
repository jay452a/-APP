<template>
  <section>
    <div class="searchArea" v-show="getSearchShow">
      <i class="iconAddressBook-search"></i>
      <input placeholder="搜索" type="text" class="search" @focus="toSearch" ref="searchInput" v-model="searchValue"/>
    </div>
    <div class="container1" v-show="!isSearch">
      <nav>
      <span :class="{active: active==='tab-container1'}">
        <router-link :to="{ name: 'linkNearly'}">
          <label class="linkNearly"><i class="iconAddressBook-zjlx"></i></label>
          <p>最近联系</p>
        </router-link>
      </span>
        <span :class="{active: active==='tab-container2'}">
        <router-link :to="{ name: 'myBranch'}">
          <label class="myBranch"><i class="iconAddressBook-branch"></i></label>
          <p>我的支部</p>
        </router-link>
      </span>
        <span :class="{active: active==='tab-container3'}">
        <router-link :to="{ name: 'myOrganize', params: {id: 'default'}}">
          <label class="myOrganize"><i class="iconAddressBook-zzjg"></i></label>
          <p>组织架构</p>
        </router-link>
      </span>
        <span :class="{active: active==='tab-container4'}">
        <router-link :to="{ name: 'mobile'}">
          <label class="mobile"><i class="iconAddressBook-txl"></i></label>
          <p>手机通讯录</p>
        </router-link>
      </span>
      </nav>
      <mt-tab-container v-model="active" :swipeable="true" class="content">
        <mt-tab-container-item id="tab-container1">
          <router-view class="view one" name="linkNearly"></router-view>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <router-view class="view two" name="myBranch"></router-view>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <router-view class="view three" name="myOrganize"></router-view>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container4">
          <router-view class="view four" name="mobile"></router-view>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!--点击搜索显示以下-->
    <div class="container2" v-show="isSearch">
      <router-view name="search"></router-view>
    </div>
  </section>
</template>
<script>
  import '@/assets/addressBook/style.css'
  export default{
    data() {
      return {
        active: 'tab-container1',
        isSearch: false,
        searchValue: ''
      }
    },
    computed: {
      getSearchShow() {
        return this.$store.state.addressBook.addressBookSearchShow
      }
    },
    methods: {
      pathChangeContent(path) {
        if (path === '/addressBook/linkNearly') {
          this.active = 'tab-container1'
        } else if (path === '/addressBook/myBranch') {
          this.active = 'tab-container2'
        } else if (path.indexOf('/addressBook/myOrganize') > -1) {
          this.active = 'tab-container3'
        } else if (path === '/addressBook/mobile') {
          this.active = 'tab-container4'
        }
      },
      contentChangePath(val) {
        if (val === 'tab-container1') {
          window.location.href = '#/addressBook/linkNearly'
        } else if (val === 'tab-container2') {
          window.location.href = '#/addressBook/myBranch'
        } else if (val === 'tab-container3') {
          window.location.href = '#/addressBook/myOrganize/' + this.$store.state.addressBook.organizeLevel
        } else if (val === 'tab-container4') {
          window.location.href = '#/addressBook/mobile'
        }
      },
      toSearch() {
        window.location.href = '#/addressBook/search/default'
      }
    },
    created() {
      var path = window.location.href.split('#')[1]
      path = path.split('?')[0]
      this.pathChangeContent(path)
      if (path.indexOf('/addressBook/search') > -1) {
        this.isSearch = true
      } else {
        this.isSearch = false
      }
    },
    watch: {
      $route(val) {
        console.log(val.path)
        this.pathChangeContent(val.path)
        this.$store.dispatch('changeAddressBookSearchShow', true)
        if (val.name === 'search') {
          this.isSearch = true
        } else {
          this.isSearch = false
          this.$refs.searchInput.blur()
        }
      },
      active(val) {
        this.contentChangePath(val)
      },
      searchValue(val) {
        this.$store.dispatch('changeAddressBookSearchValue', val)
      }
    }
  }
</script>
<style lang="scss" scoped>
  section{
   // padding-top: 5px;
    background: #f2f2f2;
    height: 100%;
  }
  .searchArea{
    position: relative;
    i{
      position: absolute;
      top:9px;
      left:15px;
      font-size: 16px;
      color: #c3c3c3;
    }
  }
  .search{
    width: 95%;
    display: block;
    margin: 0 auto;
    height: 35px;
    border: none;
    outline: none;
    text-indent: 22px;
    background: #f2f2f2;
  }
  nav{
    margin-top: 5px;
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
  .content{
    min-height: 300px;
  }
  .nav2{
    padding:0;
    span{
      height: auto;
      width: 20%;
      padding: 15px 0;
      position: relative;
    }
    span.active{
      &:after{
        content: '';
        width: 100%;
        height:2px;
        background:#0061bf ;
        position: absolute;
        left:0;
        bottom: 0;
      }
    }
  }
</style>
