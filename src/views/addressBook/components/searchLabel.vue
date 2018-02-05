<template>
  <div>
    <div class="cover" v-show="isFilerData"></div>
    <div :class="{filterBox:true, isShow: isFilerData}">
      <h6>所属企业属性</h6>
      <ul>
        <li v-for="(item,index) in qiyeData" :class="{active: item.checked}" @click="checked(qiyeData,index)">{{item.name.substring(0,4)}}</li>
      </ul>
      <h6>所属行业</h6>
      <ul>
        <li v-for="(item,index) in hangyeData" :class="{active: item.checked}" @click="checked(hangyeData,index)">{{item.name.substring(0,4)}}</li>
      </ul>
      <div class="footer">
        <button @click="clearChecked">清除筛选</button>
        <button @click="sure">确定</button>
      </div>
    </div>
    <ul class="searchList">
      <li v-for="item in renderData">
        <span class="pic">{{item.name.substring(item.name.length-2,item.name.length)}}</span>
        <label style="margin-right: 20px">{{item.name}}</label>
        <span class="label">教育</span>
      </li>
    </ul>
  </div>
</template>
<script>
  const qiye = [
    { name: '政府', checked: false },
    { name: '事业单位', checked: false },
    { name: '企业', checked: false },
    { name: '其他', checked: false },
  ]
  const hangye = [
    { name: '能源', checked: false },
    { name: '教育', checked: false },
    { name: '农业', checked: false },
    { name: '商贸业', checked: false },
    { name: '通信业', checked: false },
    { name: '制造业', checked: false },
    { name: '其他', checked: false }
  ]
  export default {
    data() {
      return {
        isFilerData: this.isFilter,
        qiyeData: qiye,
        hangyeData: hangye,
        renderData: [{ name: '渣渣辉' },
          { name: '老王' },
          { name: '文鹏' },
          { name: '毛文杰' }]
      }
    },
    props: {
      isFilter: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      checked(data, i) {
        data[i].checked = !data[i].checked
      },
      clearChecked() {
        this.qiyeData.map(res => {
          res.checked = false
        })
        this.hangyeData.map(res => {
          res.checked = false
        })
      },
      sure() {
        this.isFilerData = false
        this.$emit('emitIsFilter', false)
      }
    },
    watch: {
      isFilter(val) {
        this.isFilerData = val
      },
      isFilerData(val) {
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/addressBook.scss";
  .cover{
    position: fixed;
    left:0;
    top:0;
    bottom: 0;
    right: 0;
    z-index:9;
    background: black;
    opacity: 0.5;
  }
  .filterBox {
    width: 100%;
    background: white;
    position: absolute;
    z-index:10;
    transition: all 0.5s;
    top:-100%;
    opacity: 0;
    &.isShow{
      top:0;
      opacity: 1;
    }
    h6{
      padding: 10px 5px;
      font-size: 12px;
      font-weight: 100;
      color: #626262;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      margin-right: -10px;
      overflow: hidden;
      width: 100%;
      li{
        width: calc(20% - 10px);
        box-sizing: content-box;
        padding: 10px 0;
        background: #f2f2f2;
        text-align: center;
        margin: 5px;
        border-radius: 4px;
        &.active {
          background: $color-primary;
          color: white;
        }
      }
    }
    .footer{
      display: flex;
      margin-top: 10px;
      position: relative;
      &:before{
        content: '';
        width: 100%;
        height:1px;
        background: #dcdcdc;
        position: absolute;
        left:0;
        top:0;
      }
      &>button{
        width: 50%;
        border:none;
        padding: 15px 0;
        outline:none;
        background: white;
        font-size: 16px;
        &:active{
          opacity: 0.8;
        }
      }
      &>button:last-child{
        background: $color-primary;
        color: white;
      }
    }

  }

  .searchList li{
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
    span.label{
      padding: 5px;
      background: $color-primary;
      color: white;
      display: inline-block;
      border-radius: 4px;
      margin: 0 10px;
      font-size: 12px;
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
