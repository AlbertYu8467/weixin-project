<template>
  <div class="right">
    <span class="caption"><i class="iconfont icon-sousuo"></i></span>
    <span v-for='caption in capList' class="caption" :key='caption'>{{caption}}</span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      capList:[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    }
  }
}
</script>
<style scoped>
  .right{
    position: fixed;
    right: 10px;
    top:24vh;
    width: 20px;
  }
  .caption{
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #37363C;
  }
  .caption i {
    font-size: 12px;
  }
</style>
