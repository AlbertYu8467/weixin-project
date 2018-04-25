<template>
  <div class="wx">
    <input-search></input-search>
  </div>
</template>

<script>
import inputSearch from '@/components/common/inputSearch'
export default {
  name: 'weixin',
  data () {
    return {
      msg: 'Welcome to Weixin'
    }
  },
  components:{
     inputSearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
