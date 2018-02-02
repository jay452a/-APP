<template>
  <div>
    <ul>
      <li v-for="item in renderData">
        <span class="pic">{{item.name.substring(item.name.length-2,item.name.length)}}</span>
        <span
          class="name"
          v-html="item.name.replace(new RegExp(getSearchValue,'gm'), '<span style=\'color:red\'>'+getSearchValue+'</span>')"></span>
      </li>
    </ul>
  </div>
</template>
<script>
  const data = [
    { name: '渣渣辉' },
    { name: '老王' },
    { name: '文鹏' },
    { name: '毛文杰' }
  ]
  export default {
    props: {
    },
    data() {
      return {
        allData: data,
        renderData: []
      }
    },
    computed: {
      getSearchValue() {
        return this.$store.state.addressBook.addressBookSearchValue
      }
    },
    methods: {
      renderList(val) {
        this.renderData = []
        if (!val) {
          return
        }
        for (let i = 0; i < this.allData.length; i++) {
          if (this.allData[i].name.indexOf(val) > -1) {
            this.renderData.push(this.allData[i])
          }
        }
      }
    },
    watch: {
      getSearchValue(val) {
        console.log(val)
        this.renderList(val)
      }
    }
  }
</script>
<style lang="scss" scoped>
  ul li{
    background: white;
    width: 100%;
    padding: 12px 10px;
    position: relative;
    span.pic{
      width: 40px;
      height:40px;
      background: #65b2fa;
      display: inline-block;
      border-radius: 50%;
      line-height: 40px;
      text-align: center;
      color: white;
      margin-right: 15px;
    }
    &:after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      background: #dcdcdc;
      bottom:0;
      left:0;
    }
    &:active{
      background: #f2f2f2;
    }
  }
</style>
