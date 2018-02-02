<template>
  <mt-popup v-model="popupVisible" position="right" class="iframe-container" :modal="false" id="app-main" :class="{'loading': popupVisible}">
    <div class="loaders"><mt-spinner type="fading-circle" class="loader"></mt-spinner></div>
    <iframe :src="url" id="scene-window" name="scene-window"></iframe>
  </mt-popup>
</template>

<script>
  export default {
    props: {
      popupVisible: {
        type: Boolean,
        default: false
      },
      url: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .iframe-container{
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding-top: 40px;
    .loaders{
      display: none;
    }
    &.loading{
      .loaders{
        display: inline-block;
        width: 100%;
        height: 100%;
        .loader{
          position: absolute;
          top: 40%;
          left: 50%;
          margin-left: -14px;
        }
      }
    }
    iframe{
      width: 100%;
      height: 100%;
      border: none;
    }
  }
</style>
