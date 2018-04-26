<template>
  <div class="contact-item">
    <div class="avatar">
        <img :src= "'/static/'+person.avatar"  alt="">
    </div>
    <div class="nickname">{{person.name}}</div>                
  </div>
</template>
<script>
export default {
  props:['person']
}
</script>
<style>
    .contact-item {
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #EBEBEB;
        align-items: center;
        background: #fff;
    }
    .avatar {
        width: 35px;
        height: 35px;
    }
    .avatar img{
        width: 100%;
        height: 100%;
    }
    .nickname {
        margin-left: 10px;
        color: #000;
        font-size: 14px;
    }
</style>
