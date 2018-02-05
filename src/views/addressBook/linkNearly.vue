<template>
  <section>
    <ul>
      <a href="#/personDetail/1"><li><span class="pic">文鹏</span>文鹏</li></a>
      <li><span class="pic">黄露</span>黄露</li>
      <li><span class="pic">文杰</span>毛文杰</li>
      <li><span class="pic">渣辉</span>渣渣辉</li>
      <li><span class="pic">渣辉</span>渣渣辉</li>
      <li><span class="pic">渣辉</span>渣渣辉</li>
      <li><span class="pic">渣辉</span>渣渣辉</li>
      <li><span class="pic">渣辉</span>渣渣辉</li>
      <li><span class="pic">渣辉</span>渣渣辉</li>
      <li><span class="pic">渣辉</span>渣渣辉</li>
      <li><span class="pic">渣辉</span>渣渣辉</li>
      <li><span class="pic">渣辉</span>渣渣辉</li>
    </ul>
  </section>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  img.icon{
    border-radius: 50%;
  }
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
