<template>
  <div>
    <Header></Header> 
    <Footer v-show='isShow'></Footer>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import {mapState} from 'vuex'
import funcLabelVue from './components/contacts/funcLabel.vue';
export default {
  name: 'App',
  data(){
    return {
      isShow:this.$store.state.show
    }
  },
  computed:{
    ...mapState([
          'show',
      ]),
  },
  mounted(){
    console.log(this.$store.state.show)
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import './style/base.less';
.container {
  overflow-y: auto;
    height: 83vh;
}
</style>
