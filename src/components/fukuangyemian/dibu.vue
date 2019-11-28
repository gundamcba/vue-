<template>
  <div class="dibu">
    <div>
      <span>共{{shuliang}}件</span>
      <span>合计</span>
      <span>¥{{heji}}</span>
      <button @click="tijiao">提交订单</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: []
    };
  },
  methods: {
    tijiao() {
      this.$store.state.gouwuche = [];
      this.$router.push({ path: "/dingdan" });
    }
  },
  computed: {
    shuliang() {
      return this.lists.length;
    },
    heji(){
      var num = 0;
       this.lists.forEach(value => {
        num += value.value*value.jiage
      });
      return num
    }
  },
  created() {
    this.lists=this.$store.state.jiesuan;
  },
};
</script>

<style scoped lang="scss">
.dibu {
  position: fixed;
  bottom: 0px;
  background: white;
  height: 55px;
  > div {
    position: absolute;
    text-align: center;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 55px;
    padding-right: 12px;
    font-size: 12px;
    span:nth-child(1) {
      color: #999999;
      margin-right: 10px;
    }
    span:nth-child(2) {
      color: #333333;
    }
    span:nth-child(3) {
      color: #f50;
      margin-right: 10px;
    }
    button {
      width: 100px;
      height: 40px;
      background: linear-gradient(to right, #fd9126, #ff5000);
      color: whitesmoke;
      font-size: 14px;
      line-height: 40px;
      margin-top: 12px;
      border-radius: 30px;
    }
  }
}
</style>