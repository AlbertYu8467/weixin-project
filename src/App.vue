<template>
  <div>
    <Header></Header> 
    <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
export default {
  name: 'App',
  data(){
    return {
      aa:'aa'
    }
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import './style/base.less';
</style>
