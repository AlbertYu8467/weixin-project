<template>
  <div class="header">
      <div class="header-name">{{title}}</div>
      <div class="add-friend">
          <i class="iconfont icon-mn_tianjiahaoyou"></i>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
         title:"通讯录"
      }
  }
}
</script>
<style lang="less" scoped>
    .header {
        position: relative;
        background: #37363C;
    }
    .header-name {
        height: 9vh;
        line-height: 9vh;
        text-align: center;
        font-size: 18px;
        color:#fff;
    }
    .add-friend {
        position: absolute;
        top: 25%;
        right: 1vh;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    .add-friend i{
        display: inline-block;
        height: 100%;
        font-size: 24px;
        color: #fff;
    }
</style>

