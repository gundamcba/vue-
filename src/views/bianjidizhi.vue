<template>
  <div>
    <div class="from">
      <input type="text" placeholder="收货人" v-model="shouhuo" />
      <input type="text" placeholder="电话" v-model="dianhua" />
      <input type="text" placeholder="详细地址" v-model="xiangxidizhi" />

      <button v-show="bool" @click="xinzeng">新增</button>
      <button v-show="!bool" @click="xiugai">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shouhuo: "",
      dianhua: "",
      xiangxidizhi: "",
      i: "",
      bool: true
    };
  },
  methods: {
    xinzeng() {
      this.$store.state.shouhuodizhi.push({
        id: this.$store.state.shouhuodizhi.length + 1,
        name: this.shouhuo,
        dianhua: this.dianhua,
        dizhi: this.xiangxidizhi
      });
      if (this.shouhuo != "" && this.dianhua != "" && this.xiangxidizhi != "") {
        this.shouhuo = "";
        this.dianhua = "";
        this.xiangxidizhi = "";
        this.$router.go(-1);
      } else {
        alert("不能留空");
      }
    },
    xiugai() {
      this.$store.state.shouhuodizhi[this.i].name = this.shouhuo;
      this.$store.state.shouhuodizhi[this.i].dianhua = this.dianhua;
      this.$store.state.shouhuodizhi[this.i].dizhi = this.xiangxidizhi;
      
      if (this.shouhuo != "" && this.dianhua != "" && this.xiangxidizhi != "") {
        this.shouhuo = "";
        this.dianhua = "";
        this.xiangxidizhi = "";
        this.$router.go(-1);
      } else {
        alert("不能留空");
      }
    }
  },
  created() {
    if (this.$store.state.dizhiindex == -1) {
      this.bool = true;
    } else {
      this.i = this.$store.state.dizhiindex;
      this.shouhuo = this.$store.state.shouhuodizhi[this.i].name;
      this.dianhua = this.$store.state.shouhuodizhi[this.i].dianhua;
      this.xiangxidizhi = this.$store.state.shouhuodizhi[this.i].dizhi;

      this.bool = false;
    }
  }
};
</script>

<style scoped lang="scss">
.from {
  padding: 0 37px;

  > input {
    margin: 18px auto;
    font-size: 14px;
    width: 100%;
    height: 33px;
    line-height: 33px;
    text-indent: 4px;
    border-bottom: 1px solid #ff5000;
    clear: both;
  }
  > span {
    font-size: 12px;
    color: #555555;
    margin-bottom: 37px;
  }
  > button {
    width: 100%;
    color: white;
    height: 44px;
    font-size: 13px;
    border-radius: 34px;
    background: linear-gradient(left, #ff9000, #ff5000) no-repeat;
  }
}
</style>