<template>
  <div class="friend-container">
      <div class="friend-bg">
          <img src="/static/bg.jpg" alt="">
          <div class="friend-msg">
              <div class="name">老虎怕小羊</div>
              <div class="avatar">
                  <img src="/static/dan.jpg" alt="">
              </div>
          </div>
      </div>
      <div>aaaa</div>
  </div>
</template>
<script>
export default {
  name:'friend',
  data(){
      return {
          msg:'friend'
      }
  }
}
</script>
<style scoped>
    .friend-container{
        height: 91vh;
        overflow-y:auto; 
    }
    .friend-bg {
        position: relative;
        height: 35vh;
        margin-bottom: 40px;
    }
    .friend-bg img {
        width: 100%;
        height: 100%;
    }
    .friend-msg {
        display: flex;
        align-items: center;
        position: absolute;
        right: 10px;
        bottom: -20px;
    }
    .name {
        color: #fff;
        font-weight: 600;
        margin-right:20px; 
        margin-bottom:15px; 
        font-size:16px; 
    }
    .avatar {
        width: 60px;
        height: 60px;
        border: 2px solid #fff;
    }
    .avatar img {
        width: 100%;
        height: 100%;
    }
</style>
