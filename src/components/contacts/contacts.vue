<template>
  <div class="contacts container">
    <right-cap></right-cap>
    <input-search></input-search>
    <func-label className="icon-mn_tianjiahaoyou" label="新的朋友" color='#FE9A43'></func-label>
    <func-label className="icon-qunliaoshezhi" label="群聊" color='#289F33'></func-label>
    <func-label className="icon-biaoqian" label="标签" color='#2082DE'></func-label>
    <func-label className="icon-gongzhonghao" label="公众号" color='#2082DE'></func-label>
    
    <div v-for='item in personList' :key='item.cap'>
      <cap :initial="item.cap"></cap>
      <person-item v-for='(value,index) in item.list' :key='index' :person='value'></person-item>
    </div>
  </div>
</template>

<script>
import inputSearch from '@/components/common/inputSearch'
import rightCap from '@/components/contacts/rightCap'
import funcLabel from '@/components/contacts/funcLabel'
import personItem from '@/components/contacts/personItem'
import cap from '@/components/contacts/cap'
export default {
  name: 'contacts',
    components:{
      inputSearch,
      rightCap,
      funcLabel,
      personItem,
      cap,
  },
  data () {
    return {
      personList:[
        {
          cap:'C',
          list:[
            {
              name:'陈好',
              avatar:'dan.jpg'
            },
            {
              name:'celuo',
              avatar:'celuo.jpg'
            },
          ]
        },
        {
          cap:'L',
          list:[
            {
              name:'李好',
              avatar:'celuo.jpg'
            },
            {
              name:'李晓',
              avatar:'dan.jpg'
            },
            {
              name:'李明',
              avatar:'celuo.jpg'
            },
            {
              name:'李灵',
              avatar:'dan.jpg'
            },
          ]
        },
        {
          cap:'Z',
          list:[
            {
              name:'张浩',
              avatar:'celuo.jpg'
            },
            {
              name:'张俞',
              avatar:'dan.jpg'
            },
            {
              name:'张高',
              avatar:'celuo.jpg'
            },
            {
              name:'张露',
              avatar:'dan.jpg'
            },
          ]
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
