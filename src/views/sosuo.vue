<template>
  <div class="sos">
    <van-search
  
  placeholder="请输入搜索关键词"
  show-action
  shape="round"
  left-icon="none"
  right-icon="search"
  label="宝贝△"
>
  <div slot="action" @click="quxiao">取消</div>
</van-search>

  </div>
</template>

<script>
  
  export default {
    methods: {
      quxiao(){
        this.$router.push({path:"/shouye"})
      }
    },
  }
</script>

<style scoped>
.sos{
  background: #eee;
  width: 100%;
  height: auto;
  position: fixed;
  top:0px;
  left: 0px;
  bottom: 0;  
  margin-bottom: 4px;
}
</style>