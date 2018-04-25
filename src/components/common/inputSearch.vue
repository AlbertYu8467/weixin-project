<template>
  <div class="input-wrap">
        <div class="search">
            <input type="text" class="input" placeholder="搜索">
            <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="voice">
            <i class="iconfont icon-yuyin"></i>
        </div>
  </div>
</template>

<script>
export default {
  
}

</script>
<style scoped>
    .input-wrap {
        display: flex;
        margin: 10px;
        font-size:14px; 
    }
    .search {
        position: relative;
        width: 90%;
    }
    .search i{
        position: absolute;
        left: 43%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    .input {
        width: 100%;
        height: 4vh;
        line-height: 4vh;
        border-radius:3px;
        background: #fff; 
        text-align: center;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .voice {
        width: 10%;
        height: 4vh;
        line-height: 4vh;
        text-align: center;
        background: #fff;
        border-radius:3px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .voice:hover {
        cursor: pointer;
    }
    i {
        font-size: 18px;
    }
</style>

