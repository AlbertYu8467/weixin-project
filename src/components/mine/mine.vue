<template>
  <div class="mine">
    <div class="term-container">
      <div class="intro">
        <div class="person-avatar">
          <img src="/static/dan.jpg" alt="">
        </div>
        <div class="intro-middle">
          <div class="intro-nickname">老虎怕小羊</div>
          <div class="intro-wx">微信号: just-do-it000</div>
        </div>
        <div class="intro-rignt">
          <i class="iconfont icon-erweima"></i>
          <i class="iconfont icon-previewright"></i>
        </div>
      </div>
    </div>
    <div class="term-container">
      <term name='钱包' className='icon-qianbao' color='#11AEFF'></term>
    </div>
    <div class="term-container">
      <term name='收藏' className='icon-shoucang' color='#FD504A'></term>
      <term name='相册' className='icon-xiangce' color='#08B2FA'></term>
      <term name='卡包' className='icon-qiabao' color='#A0DA0A'></term>
      <term name='表情' className='icon-biaoqing' color='#FEC403'></term>      
    </div>
    <div class="term-container">
      <term name='设置' className='icon-icon-test' color='#06ADFF'></term>    
    </div>
  </div>
</template>

<script>
import term from '@/components/common/term.vue'
export default {
  name: 'mine',
  components:{
    term
  },
  data () {
    return {
      msg: 'Welcome to Mine'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mine {
    padding-top:10px; 
  }
  .term-container{
    border-top:1px solid #EBEBEB;
    border-bottom:1px solid #EBEBEB; 
    margin-bottom: 10px;
    padding-left: 15px;
    background: #fff;    
  }
  .intro {
    display: flex;
    padding: 10px 0;
    padding-right:10px; 
  }
  .person-avatar {
    width: 60px;
    height: 60px;
  }
  .person-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .intro-middle {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-around;
    margin-left:15px;
    color:#000;
  }
  .intro-nickname {
    font-size: 16px;
  }
  .intro-rignt {
    display: flex;
    align-items: center;
  }
  .intro-rignt i{
    font-size: 22px;
    color: #D0D0D0;
  }
</style>
