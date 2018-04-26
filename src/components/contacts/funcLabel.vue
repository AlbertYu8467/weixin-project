<template>
  <div class="contact-item">
      <div class="avatar" :style="{'backgroundColor':color}">
        <i :class="['iconfont',className]"></i>
      </div>
      <div class="nickname">{{label}}</div>                
    </div>
</template>
<script>
export default {
props:['className','label','color'],
  data(){
      return {
          funcList:''
      }
  }
}
</script>
<style scoped>
    .avatar{
        text-align: center;
        line-height: 35px;
    }
    .avatar i {
        font-size:20px;
        color: #fff; 
    }
</style>
