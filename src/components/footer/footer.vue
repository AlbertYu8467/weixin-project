<template>
  <ul class="footer">
    <router-link to='/weixin' tag="li">
        <i class="iconfont icon-wechat"></i>
        <a>微信</a>
    </router-link>
    <router-link to='/contacts' tag="li">
        <i class="iconfont icon-tongxunlu"></i>
        <a>通讯录</a>
    </router-link>
    <router-link to='/find' tag="li">
        <i class="iconfont icon-faxian"></i>
        <a>发现</a>
    </router-link>
    <router-link to='/mine' tag="li">
        <i class="iconfont icon-wo"></i>
        <a>我</a>
    </router-link>
  </ul>
</template>
<script>
export default {
  data(){
      return {
          msg:'aa'
      }
  }
}
</script>
<style scoped>
    .footer {
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 0;
        width: 100%;    
        height: 8vh;
        padding: 0 5vw;
        background: #F7F7F7;
        border-top: 1px solid #E0E0E0; 
    
    }
    .footer li {
        height: 100%;
        width: 25%;
        text-align: center;
    }
    .footer i {
        display: block;
        width: 100%;
        height: 32px;
        font-size: 28px;
    }
    .footer a {
        font-size: 12px;
    }
</style>


