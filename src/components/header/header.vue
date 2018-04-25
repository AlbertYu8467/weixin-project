<template>
  <div class="header">
      <div class="header-name">{{this.title}}</div>
      <div class="add-friend" v-if="this.title == '通讯录' ">
          <i class="iconfont icon-jia"></i>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
      return {
         msg:['a']
      }
  },
  computed:{
      ...mapState([
          'title'
      ])
  },
  mounted(){
      
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
        right: 1vw;
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

