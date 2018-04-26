<template>
  <div class="find container">
    <div class="term-container">
      <term name='朋友圈' className='icon-pengyouquan' color='#5DD500' v-on:click.native="jump('/friend','朋友圈')"></term>
    </div>
    <div class="term-container">
      <term name='扫一扫' className='icon-saoyisao' color='#00BAF2'></term>
      <term name='摇一摇' className='icon-weixinyaoyiyaoicon' color='#00BAF2'></term>
    </div>
    <div class="term-container">
      <term name='附近的人' className='icon-fujin' color='#01B5FC'></term>
      <term name='漂流瓶' className='icon-bottle' color='#01B5FC'></term>
    </div>
    <div class="term-container">
      <term name='小程序' className='icon-xiaochengxu' color='#7384D1'></term>
    </div>
  </div>
</template>

<script>
import term from '@/components/common/term'
import {mapMutations,mapState} from 'vuex'
export default {
  name: 'contacts',
  components:{
    term
  },
  data () {
    return {
      msg: 'Welcome to Find'
    }
  },
   computed:{
      ...mapState([
          'title'
      ])
  },
  methods:{
    ...mapMutations([
      'changeTitle',
      'footerShow'
    ]),
    jump(path,title){
      this.$router.push(path)
      this.$store.commit('changeTitle',title)
      this.$store.commit('footerShow',false)
      console.log(this.$store.state.footerShow)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .find {
    padding-top:10px; 
  }
  .term-container{
    border-top:1px solid #EBEBEB;
    border-bottom:1px solid #EBEBEB; 
    margin-bottom: 10px;
    padding-left: 15px;
    background: #fff;    
  }
</style>
