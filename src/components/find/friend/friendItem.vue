<template>
  <div class="friend-item">
      <div class="friend-item-left">
          <img :src="'/static/'+msg.avatar" alt="">
      </div>
      <div class="friend-item-right">
          <div class="friend-item-name">{{msg.nickname}}</div>
          <div class="friend-item-msg">{{msg.txt}}</div>
          <div class="friend-item-pic">
              <img :src="'/static/'+msg.pic" alt="">
          </div>
          <div class="friend-item-comment">
              <div class="friend-item-time">
                  {{msg.time}}
              </div>
              <div class="comment">
                  <i class="iconfont icon-liuyan"></i>
              </div>
          </div>
          <div class="friend-item-leave">
              <div class="praise">
                  <i class="iconfont icon-icon-test1"></i>
                  <span class="name" v-for='(value,index) in msg.praise' :key="index">{{value}}</span>
              </div>
              <div class="leave-message">
                  <div v-for="(value,index) in msg.msgList" :key="index">
                      <span class="name">{{value.name}}</span>
                        <span class="txt">{{value.txt}}</span>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  props:['msg']
}
</script>
<style scoped>
    .friend-item {
        display: flex;
        padding: 15px 10px;
        border-top:1px solid #EBEBEB;
    }
    .friend-item-left {
        width:40px;
        height: 40px;
        margin-right: 10px;
    }
    .friend-item-left img{
        width: 100%;
        height: 100%;
    }
    .friend-item-right {
        flex-grow: 1;
    }
    .friend-item-name {
        font-weight: 500;
        color:#505C7E;
        margin-bottom:3px; 
    }
    .friend-item-msg {
        color:#000;
        margin-bottom:3px; 
    }
    .friend-item-pic {
        width: 25vw;
        height: auto;
        margin-bottom: 3px;
    }
    .friend-item-pic img {
        width: 100%;
        height: 100%;
    }
    .friend-item-comment {
        display: flex;
        justify-content: space-between;
        margin-bottom:3px; 
    }
    .friend-item-time {
        font-size: 12px;
    }
    .comment {
        color: #96ABD0;
    }
    .friend-item-leave {
        background: #F3F3F5;
        padding-left:8px; 
        color:#505C7E;
    }
    .praise .name:not(:last-child)::after{
        content: ','
    }
    .praise {
        border-bottom: #EBEBEB;
        margin-bottom:3px; 
    }
    .leave-message .name::after {
        content: ":";
        color:#000;
    }
    .leave-message .txt {
        color:#000;
    }
</style>
