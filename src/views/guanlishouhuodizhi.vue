<template>
  <div>
    <div style="padding:12px;color:#ccc;background: white;" @click="fanhui"><</div>
    <div class="xuanze">
      <span>选择代收货地址</span>
      <span>></span>
    </div>
    <ul>
      <li v-for="(items,i) in dizhi" :key="i" @click="xuanze(i)">
        <p>
          <span>{{items.name}}</span>
          <span>{{items.dianhua}}</span>
          <button @click.stop="xiugai(i)">修改地址</button>
        </p>
        <p>{{items.dizhi}}</p>
      </li>
    </ul>
    <div class="xinzeng" @click="bianji">新增收货地址</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dizhi: []
    };
  },
  methods: {
    fanhui(){
      this.$router.go(-1);
    },
    xuanze(i) {
      this.$store.state.morendizhi = this.dizhi[i];
      this.$router.push({ path: "/fukuangyemian" });
    },
    bianji() {
      this.$store.state.dizhiindex = -1;

      this.$router.push({ path: "/bianjidizhi" });
    },
    xiugai(i) {
      this.$store.state.dizhiindex = i;
      this.$router.push({ path: "/bianjidizhi" });
    }
  },
  created() {
    this.dizhi = this.$store.state.shouhuodizhi;
    console.log(this.dizhi);
  }
};
</script>

<style scoped lang="scss">
.xuanze {
  padding: 12px;
  background: white;
  clear: both;
  overflow: hidden;
  span {
    font-size: 14px;
    color: #ccc;
    height: 14px;
    &:nth-child(1) {
      float: left;
    }
    &:nth-child(2) {
      float: right;
    }
  }
}
ul {
  background: white;
  padding: 12px;
  font-size: 12px;
  li {
    padding: 12px 0;
    border-top: 1px solid #ccc;
    p {
      overflow: hidden;
      clear: both;
      padding: 6px 0;
      span {
        &:nth-child(1) {
          float: left;
        }
        &:nth-child(2) {
          float: right;
        }
      }
    }
  }
}
.xinzeng {
  position: fixed;
  bottom: 0;
  text-align: center;
  z-index: 11111;
  height: 50px;
  width: 100%;
  background: #f50;
  line-height: 50px;
  color: white;
}
</style>