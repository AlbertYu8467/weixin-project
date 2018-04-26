<template>
  <ul class="footer">
    <li @click="jump('weixin','微信')" :class="[isActive == 'weixin' ? 'active':'']">
        <i class="iconfont icon-wechat"></i>
        <a>微信</a>
    </li>
    <li @click="jump('contacts','通讯录')" :class="[isActive == 'contacts' ? 'active':'']">
        <i class="iconfont icon-tongxunlu"></i>
        <a>通讯录</a>
    </li>
    <li @click="jump('find','发现')" :class="[isActive == 'find' ? 'active':'']">
        <i class="iconfont icon-faxian"></i>
        <a>发现</a>
    </li>
    <li @click="jump('mine','我')" :class="[isActive == 'mine' ? 'active':'']">
        <i class="iconfont icon-wo"></i>
        <a>我</a>
    </li>
  </ul>
</template>
<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  data(){
      return {
          isActive:'weixin'
      }
  },
  computed:{
      ...mapState([
          'title',
          'show'
      ])
  },
  methods:{
      ...mapMutations([
          'changeTitle',
          'footerShow'
      ]),
      jump(path,title){
          this.isActive = path
          this.$router.push(path)
          this.$store.commit('changeTitle',title)
          this.$store.commit('footerShow',true)
          console.log(this.$store.state.show)
      }
  },
  mounted(){
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
    li.active {
        color:#17B315
    }
    li.active a {
        color:#17B315
    }
</style>


