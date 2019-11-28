<template>
  <div id="app">
    <van-grid class="dibu" :column-num="4" v-show="bool">
      <van-grid-item icon="wap-home-o" text="首页" to="/shouye" />
      <van-grid-item icon="cart-o" text="购物车" to="/gouwuche" />
      <van-grid-item icon="label-o" text="订单列表" to="/dingdan" />
      <van-grid-item icon="manager-o" text="我的" to="/denglu" />
      <!-- <van-grid-item icon="ellipsis" text="更多" to="/gengduo" /> -->
    </van-grid>

    <router-view />
  </div>
</template>
<script>
import "vant/lib/icon/local.css";
export default {
  data() {
    return {
      bool: true
    };
  },
  watch: {
    "$route.path": function(xinurl) {
      if (xinurl == "/xiangqing") {
        this.bool = false;
      } else {
        this.bool = true;
      }

      if (xinurl == "/denglu") {
        if (localStorage.dengluzhong) {
          this.$router.push({ path: "/wode" });
        }
      }
    }
  }
};
</script>

<style scope lang="scss">
* {
  margin: 0;
  padding: 0;
}
button {
  border: none; //自定义边框
  outline: none;
}
input {
  background: none;
  outline: none;
  border: none;
}
input:focus {
  border: none;
}
img {
  display: block;
}
body,
html {
  height: 100%;
  width: 100%;
}
body {
  background: #f5f5f5;
}
.dibu {
  margin-top: 1px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 41px;
  z-index: 1;
  .van-grid-item__content {
    height: 41px;
    padding: 0;
    .van-grid-item__icon {
      font-size: 19px;
    }
  }
  .van-grid-item__icon + .van-grid-item__text {
    margin-top: 0;
  }
}
</style>
