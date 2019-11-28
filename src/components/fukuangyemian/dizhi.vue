<template>
  <div class="dizhi" @click="GOshouhuo">
    <div class="left">
      <img
        src="https://gw.alicdn.com/tfs/TB17gX2wYvpK1RjSZPiXXbmwXXa-128-128.png_70x70q90_.webp"
        alt
      />
    </div>
    <div class="rigth">
      <p>
        <span>{{dizhi.name}}</span>
        <span>{{dizhi.dianhua}}</span>
      </p>
      <p>{{dizhi.dizhi}}</p>
      <p>收货不便时................</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dizhi:{

      }
    }
  },
  methods: {
    GOshouhuo() {
      this.$router.push({ path: "/guanlishouhuodizhi" });
    }
  },
  created(){
    this.dizhi = this.$store.state.morendizhi;
    
  }
};
</script>

<style scoped lang="scss">
.dizhi {
  border-radius: 20px;
  position: relative;
  width: 100%;
  background: white;
  padding: 12px 0;
  display: flex;
  .left {
    position: relative;
    height: 32px;
    width: 32px;

    display: inline-block;
    margin: auto 12px;
    top: 0;
    bottom: 0;
    img {
      width: 100%;

      border-radius: 50%;
    }
  }
  .rigth {
    width: 100%;
    padding-right: 28px;
    p:nth-child(1) {
      span:nth-child(1) {
        font-size: 13px;
        color: #333333;
        margin-right: 7px;
      }
      span:nth-child(2) {
        font-size: 10px;
        color: #999999;
      }
    }
    p:nth-child(2) {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 11px;
      color: #333333;
    }
    p:nth-child(3) {
      font-size: 11px;
      color: #f50;
    }
  }
}
</style>
