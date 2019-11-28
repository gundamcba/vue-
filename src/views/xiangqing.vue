<template>
  <div>
    <div class="lunbotu">
      <van-swipe :autoplay="3000" indicator-color="#F50">
        <van-swipe-item>
          <img :src="data.url" alt />
        </van-swipe-item>
      </van-swipe>
      <van-icon name="arrow-left" class="fanhui" @click="fanhui" />
    </div>
    <div class="jiaqian">
      ¥
      <span>{{data.jiage}}</span>
    </div>
    <div class="shangpingID">{{data.biaoti}}</div>
    <div class="xiangqing" v-for="(item, index) in data.xiangqing" :key="index">{{item}}</div>

    <van-goods-action>
      <!-- <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="chat-o" text="客服" /> -->
      <van-goods-action-icon icon="cart-o" text="购物车" to="/gouwuche" />
      <van-goods-action-button type="warning" text="加入购物车" @click="gouwuche" />
      <van-goods-action-button type="danger" text="立即购买" @click="lijigoumai"/>
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ""
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    gouwuche() {
      if (this.$store.state.gouwuche[0] == undefined) {
        console.log(this.data);
        this.$store.state.gouwuche = [];

        this.$store.state.gouwuche[0] = this.data;
      } else if (this.$store.state.gouwuche.indexOf(this.data) == -1) {
        this.$store.state.gouwuche.push(this.data);
      } else if (this.$store.state.gouwuche[0].id == undefined) {
        this.$store.state.gouwuche.splice(0, 1);
      } else {
        this.$store.state.gouwuche.forEach((element, i) => {
          if (element.id == this.data.id) {
            element.value++;
          }
        });
      }
    },
    lijigoumai(){
      this.$store.state.jiesuan[0]=this.data;
      this.$router.push({path:"/fukuangyemian"});
    }
  },

  created() {
    this.data = this.$store.state.lists[this.$route.query.id - 1];
  }
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
.lunbotu {
  position: relative;
  .fanhui {
    position: absolute;
    font-size: 16px;
    line-height: 30px;
    height: 30px;
    width: 30px;
    color: white;
    top: 7px;
    left: 10px;
    background: #000;
    border-radius: 50%;
    text-align: center;
    opacity: 0.7;
  }
}
.jiaqian {
  color: #ff3036;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 8px 8px 10px;
  background: white;
  > span {
    font-size: 18px;
  }
}
.shangpingID {
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  padding: 0 8px;
  background: white;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>