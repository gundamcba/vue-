<template>
  <div class="denglu">
    <div class="top">
      <span class="left">你需要登录才能继续访问</span>
      <span class="right" @click="guanbi">关闭</span>
    </div>
    <div class="logo">
      <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" alt />
    </div>
    <div class="from">
      <input type="text" placeholder="手机号/邮箱/会员名" v-model="username" />
      <input type="password" placeholder="请输入密码" v-model="password" />
      <span style="float:left">短信验证码登录</span>
      <span style="float:right" @click="gozhuche">免费注册</span>
      <button @click="denglu">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    guanbi() {
      this.$router.go(-1);
    },
    gozhuche() {
      this.$router.push({ path: "/zhuche" });
    },
    denglu() {
      window.console.log("登录成功");
      // ajax请求后台登录API功能
      this.$axios
        .get("/login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          console.log(response);

          if (response.data.code == 200) {
            let token = response.data.result.token;
            localStorage.login = token;
            localStorage.dengluzhong = true;
            this.$router.push("/wode");
          } else {
            alert("请输入正确账号密码")
          }
        });
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
.denglu {
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;

  .top {
    padding: 17px 20px 19px 20px;
    background: #eeeeee;
    font-size: 16px;
    font-weight: bold;
    clear: both;

    .left {
      color: #333333;
    }
    .right {
      color: #9d9d9d;
      float: right;
    }
  }
  .logo {
    height: 76px;
    width: 100%;
    margin-bottom: 20px;
    img {
      height: 76px;
      width: 76px;
      border-radius: 50%;
      margin: 0 auto;
    }
  }
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
}
</style>