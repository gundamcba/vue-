<template>
  <div class="toubu">
    <ul>
      <li v-for="(items,i) in top " :key="i" >
        <span :class="items.class" @click="qiehuan(i)">{{items.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: [
        { name: "全部", class: "con"},
        { name: "待付款", class: "" },
        { name: "待发货", class: "" },
        { name: "待收货", class: "" },
        { name: "待评价", class: "" }
      ]
    };
  },
  methods:{
    qiehuan(i){
      for(var j = 0;j<this.top.length;j++){
        this.top[j].class = "";
      }
      this.top[i].class = "con";
    }
  }
};
</script>

<style scoped lang="scss">
.toubu {
  width: 100%;
  height: 38px;
  text-align: center;
  background: white;
  ul {
    display: flex;
    width: 100%;
    li {
      flex: 1;
      height: 34px;
      line-height: 34px;
      font-size: 12px;
      border-top: 2px solid white;
      span {
        display: inline-block;
        height: 34px;
      }
      span.con {
        border-bottom: 2px solid #f50;
      }
    }
  }
}
</style>