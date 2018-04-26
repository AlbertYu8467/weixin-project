<template>
  <div class="wx container">
    <input-search></input-search>    
    <notice v-for='(item,index) in noticeList' :key='index' :note='item'></notice>
  </div>
</template>

<script>
import inputSearch from '@/components/common/inputSearch'
import notice from '@/components/weixin/notice'
export default {
  name: 'weixin',
  components:{
     inputSearch,
     notice
  },
  data () {
    return {
      noticeList:[
        {
          src:'dan.jpg',
          nickName:'小朱',
          txt:'也许吧',
          time:'星期一'
        },
        {
          src:'celuo.jpg',
          nickName:'小李',
          txt:'和高考一样',
          time:'星期五'
        },
        {
          src:'celuo.jpg',
          nickName:'小朱',
          txt:'怎么会',
          time:'星期六'
        },
        {
          src:'dan.jpg',
          nickName:'小杨',
          txt:'和高考一样',
          time:'星期一'
        },
        {
          src:'dan.jpg',
          nickName:'小许',
          txt:'干什么',
          time:'星期二'
        },
        {
          src:'celuo.jpg',
          nickName:'小曹',
          txt:'和高考一样',
          time:'星期三'
        },
        {
          src:'dan.jpg',
          nickName:'小汪',
          txt:'和高考一样',
          time:'星期六'
        },
        {
          src:'celuo.jpg',
          nickName:'小刘',
          txt:'和高考一样',
          time:'星期四'
        },
        {
          src:'dan.jpg',
          nickName:'小宋',
          txt:'和高考一样',
          time:'星期一'
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
