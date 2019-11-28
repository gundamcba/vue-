<template>
  <div>
    <div class="wode">
      <div class="top">
        <div class="shang">
          <div class="left">
            <img
              class="touxiang"
              src="http://gw.alicdn.com/sns_logo/i4/3078328887/TB2dxtVbUdnpuFjSZPhXXbChpXa_!!0-mytaobao.jpg_100x100q90_.webp"
              alt
            />
            <span class="id">名字</span>
          </div>
        </div>
      </div>

      

     
    </div>
    <div id="dingdan">
      <div class="dingdan" @click="dingdan">
        <div class="shang">
          <span>我的订单</span>
          <span>查看全部订单></span>
        </div>
        <ul>
          <li><img src="https://gw.alicdn.com/tfs/TB16GolmKuSBuNjy1XcXXcYjFXa-87-87.png_60x60q90_.webp" alt=""><span>待付款</span></li>
          <li><img src="https://gw.alicdn.com/tfs/TB1cwzgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp" alt=""><span>待发货</span></li>
          <li><img src="https://gw.alicdn.com/tfs/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp" alt=""><span>待收货</span></li>
          <li><img src="https://gw.alicdn.com/tfs/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png_60x60q90_.webp" alt=""><span>评价</span></li>
          <li><img src="https://gw.alicdn.com/tfs/TB1fMzgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp" alt=""><span>退款/售后</span></li>
        </ul>
        <div class="wuliu">
          <div class="wuliu-top">
            <p>最新物流</p>
            <p>11:48</p>
          </div>
          <div class="bottom">
            <div class="left">
              <img src="http://gw.alicdn.com/bao/uploaded/i3/3164711246/O1CN01zjM9tI1L4i4KDftzU_!!0-item_pic.jpg_70x70q90_.webp" alt />
            </div>
            <div class="right">
              <p>已发货</p>
              <p>包裹正在等待揽收</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    dingdan(){
      this.$router.push({path:"/dingdan"})
    }
  },
  created() {
    window.console.log("登录")
    if(!localStorage.login){
      this.$router.push("/denglu");
    }else{

      this.$axios.get("/getdata",{
        params:{
          token:localStorage.login
        }
      }).then((req)=>{
        console.log(req);
        this.info = req.data.result
      })

    }
  },
};

</script>

<style scoped lang="scss">
#dingdan{
  width: 100%;
  
  
  .dingdan {
    padding-bottom: 12px;
    border-radius: 20px;
  margin: 11px;
  background: white;
  
  .shang {
    
    padding: 11px;
    >span:nth-child(1){
      float: left;
      font-size: 14px;
      font-weight: bold;
      color: black;

    }
    >span:nth-child(2){
      float: right;
      font-size: 12px;
      color: #999999;
    }
  }
  ul{
    display: flex;
    width: 100%;
   li{
     
     flex: 1;
     text-align: center;
     font-size: 11px;
     color: #676767;
     img{
       width: 50%;
       margin: 0 auto;
     }
   
   } 

  }
  .wuliu{
    padding: 3px 10px 6px 10px;
    background: #F6F6F6;
    margin: 6px 11px 12px 11px;
    border-radius: 10px;
    .wuliu-top{
      clear: both;
      height: 20px;
      width: 100%;
      >p:nth-child(1){
        float: left;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #999;
      }
      >p:nth-child(2){
        float: right;
         height: 20px;
        line-height: 20px;
        font-size: 10px;
        color: #999;
      }

    }
    .bottom{
      height: 40px;
      .left{
        width: 31px;
        height: 31px;
        float: left;
        margin: 5px 0;
        img{
          width: 100%;
        }
      }
      .right{
         float: left;
        margin-left: 9px;
        >p:nth-child(1){
          font-size: 12;
          color: #3897E0;
          height: 21px;
          line-height: 21px;

        }
        >p:nth-child(2){
          height: 19px;
          line-height: 19px;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
}

.wode {
  width: 100%;
  min-height: 100%;

  // background: #F5F5F5;
  top: 0;
  bottom: 0;
  padding-bottom: 41px;
  margin: auto;
}

.top {
  padding: 35px 13px 29px 17px;
  background: linear-gradient(to right, #fd9126, #ff5000);
  .shang {
    height: 50px;
    width: 100%;

    .left {
      position: relative;
      .touxiang {
        width: 47px;
        height: 47px;
        display: inline-block;
        border-radius: 50%;
      }
      .id {
        font-size: 20px;
        color: white;
        font-weight: bold;
        position: absolute;
        left: 60px;
      }
    }
  }
}
</style>