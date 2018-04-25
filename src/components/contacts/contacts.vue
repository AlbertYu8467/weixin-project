<template>
  <div class="contacts">
      <cap></cap>
      <person-item></person-item>
  </div>
</template>

<script>
import personItem from '@/components/contacts/personItem'
import cap from '@/components/contacts/cap'
export default {
  name: 'Contacts',
  data () {
    return {
      msg: 'Welcome to Contacts'
    }
  },
  components:{
     personItem,
     cap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
