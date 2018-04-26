<template>
  <div class="notice-item">
      <div class="notice-avatar">
          <img :src="'/static/'+note.src" alt="">
      </div>
      <div class="notice-content">
          <div class="up">
              <div class="nickname">{{note.nickName}}</div>
              <div class="time">{{note.time}}</div>
          </div>
          <div class="down">
              <div class="text">{{note.txt}}</div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  props:['note']
}
</script>
<style scoped>
    .notice-item {
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #EBEBEB;
        align-items: center;
        background: #fff;
    }
    .notice-avatar {
        width: 40px;
        height: 40px;
    }
    .notice-avatar img{
        width: 100%;
        height: 100%;
    }
    .notice-content {
        flex-grow: 1;
        margin-left:10px; 
    }
    .up {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    .time {
        font-size:12px;
    }
    .nickname {
        color: #000;
        font-size: 14px;
        margin-left:0; 
    }
    .down .text{
        font-size: 12px;
    }
</style>
