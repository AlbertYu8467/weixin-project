<template>
  <div class="term-item">
      <div class="term-left">
         <i :class="['iconfont',className]" :style="{'color':color}"></i>
        <span class="term-name">{{name}}</span> 
      </div>
      <div class="term-right">
        <i class="iconfont icon-previewright"></i>
      </div>
  </div>
</template>
<script>
export default {
    props:['name','className','color'],
  name:'term'
}
</script>
<style scoped>
    .term-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        border-top:1px solid #EBEBEB;
    }
    .term-item {
        cursor: pointer;
    }
    .term-left {
        height: 30px;
        display: flex;
        align-items: center;
    }
    .term-left i{
        font-size: 20px;
    }
    .term-name {
        font-size: 16px;
        color:#000;
        margin-left: 15px;
    }
    .term-right {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }
    .term-right i {
        font-size: 22px;
        color:#D0D0D0;
    }
</style>
