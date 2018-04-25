<template>
  <div class="contact-item">
    <div class="avatar">
        <img src="/static/celuo.jpg" alt="">
    </div>
    <div class="nickname">陈刚</div>                
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    .contact-item {
        display: flex;
        padding: 10px;
        border-top: 1px solid #EBEBEB;
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
