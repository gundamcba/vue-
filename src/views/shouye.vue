<template>
  <div class="shouye">
    <!-- 头部搜索部分 -->
    <Toubu />
    <!-- 轮播图部分 -->
    <Lunbotu />
    <!-- 各种分类部分 -->
    <!-- <Fenlei /> -->
    <!-- 猜你喜欢部分 -->
    <caini/>
    
  </div>
</template>

<script>
import Toubu from "@/components/shouye/Toubu.vue";
import Lunbotu from "@/components/shouye/Lunbotu.vue";
// import Fenlei from "@/components/shouye/Fenlei.vue";
import caini from "@/components/shouye/caini.vue";


export default {
 
  components: {
    caini,
    // Fenlei,
    Lunbotu,
    Toubu,
    
  }
};
</script>

<style scoped lang="scss">
.shouye {
  margin-bottom: 40px;
  background: #ff852a;
  
  }

</style>
