<template>
  <div class="fukuangyemian">
    <dizhi />
    <liebiao />
    <dibu />

    
  </div>
</template>

<script>
import liebiao from "@/components/fukuangyemian/liebiao.vue";
import dizhi from "@/components/fukuangyemian/dizhi.vue";
import dibu from "@/components/fukuangyemian/dibu.vue";


export default {
  data() {
    return {};
  },

  components: {
    dibu,
    dizhi,

    liebiao
  }
};
</script>

<style scoped lang="scss">
.fukuangyemian {
  padding: 12px;
  height: 100%;
  
}
</style>