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
      <div class="friend-list">
        <friend-item v-for="(value,index) in friendList" :key='index' :msg='value'></friend-item>
      </div>
  </div>
</template>
<script>
import friendItem from '@/components/find/friend/friendItem'
export default {
  name:'friend',
  components:{
     friendItem 
  },
  data(){
      return {
          friendList:[
            {
              'avatar':'dan.jpg',
              'nickname':'吴丹妮',
              'txt':'可惜了',
              'time':'两天前',
              'pic':'celuo.jpg',
              'praise':[
                  '夏梦丹','王昭君'
              ],
              'msgList':[
                  {
                      'name':'张莉',
                      'txt':'哈哈'
                  },
                  {
                      'name':'老虎怕小羊',
                      'txt':'想多了吧'
                  }
              ]
            },            {
              'avatar':'dan.jpg',
              'nickname':'吴丹妮',
              'txt':'可惜了',
              'time':'两天前',
              'pic':'celuo.jpg',
              'praise':[
                  '夏梦丹','王昭君'
              ],
              'msgList':[
                  {
                      'name':'张莉',
                      'txt':'哈哈'
                  },
                  {
                      'name':'老虎怕小羊',
                      'txt':'想多了吧'
                  }
              ]
            },
                        {
              'avatar':'dan.jpg',
              'nickname':'吴丹妮',
              'txt':'可惜了',
              'time':'两天前',
              'pic':'celuo.jpg',
              'praise':[
                  '夏梦丹','王昭君'
              ],
              'msgList':[
                  {
                      'name':'张莉',
                      'txt':'哈哈'
                  },
                  {
                      'name':'老虎怕小羊',
                      'txt':'想多了吧'
                  }
              ]
            },
                        {
              'avatar':'dan.jpg',
              'nickname':'吴丹妮',
              'txt':'可惜了',
              'time':'两天前',
              'pic':'celuo.jpg',
              'praise':[
                  '夏梦丹','王昭君'
              ],
              'msgList':[
                  {
                      'name':'张莉',
                      'txt':'哈哈'
                  },
                  {
                      'name':'老虎怕小羊',
                      'txt':'想多了吧'
                  }
              ]
            },
                        {
              'avatar':'dan.jpg',
              'nickname':'吴丹妮',
              'txt':'可惜了',
              'time':'两天前',
              'pic':'celuo.jpg',
              'praise':[
                  '夏梦丹','王昭君'
              ],
              'msgList':[
                  {
                      'name':'张莉',
                      'txt':'哈哈'
                  },
                  {
                      'name':'老虎怕小羊',
                      'txt':'想多了吧'
                  }
              ]
            },
          ]
      }
  }
}
</script>
<style scoped>
    .friend-container{
        height: 91vh;
        overflow-y:auto; 
        background: #fff;
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
