<template>
   <div class="toubu">
      <div class="sosuo" @click="TOsosuo">
        <div>寻找宝贝店铺</div>
      </div>
    </div>
</template>

<script>
    export default {
       methods: {
 TOsosuo() {
      this.$router.push({ path: "/sosuo" });
    }
  },
       
    }
</script>

<style scoped lang="scss">
.toubu {
  padding: 4px 9px 6px 4px;
  background: url(../../assets/logo.png) no-repeat;
  background-size: 27px 20px;
  background-position: 9px center;
 
  > div {
    margin-left: 38px;
    font-size: 13px;
    background: #ff4e22;
    height: 25px;
    border-radius: 4px;
    color: #f0e0dc;
    text-align: center;
    line-height: 25px;
  }
}
</style>