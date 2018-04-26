<template>
  <div class="cap">{{initial}}</div>
</template>
<script>
export default {
    props:['initial'],
    data(){
        return {
            msg:'caption'
        }
    }
}
</script>
<style scoped>
    .cap {
        padding: 3px 0 3px 10px;
        color:#000;
    }
</style>


