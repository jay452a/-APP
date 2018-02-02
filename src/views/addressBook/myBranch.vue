<template>
  <div>
    <h3>H</h3>
    <ul>
        <li><span class="pic">胡歌</span>胡歌</li>
    </ul>
    <h3>F</h3>
    <ul>
      <li><span class="pic">付宁</span>付宁</li>
    </ul>
    <h3>Z</h3>
    <ul>
      <li><span class="pic">渣辉</span>渣渣辉</li>
    </ul>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
  h3{
    padding: 5px 10px;
    font-weight: 100;
    font-size: 12px;
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
