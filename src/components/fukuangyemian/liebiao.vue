<template>
    <div>
        <ul class="liebiao" v-for="(item, index) in lists" :key="index">
      <li>
        <p class="dianming">店铺名</p>
        <div class="neirong">
          <div class="img"><img :src="item.url" alt=""></div>
          <div class="main">
            {{item.biaoti}}
          </div>
          <div class="qian">
            <p>¥{{item.jiage}}</p>
            <p>X{{item.value}}</p>
          </div>
        </div>
        <p class="xiaoji"><span>共{{item.value}}件</span><span>小计:</span><span>¥{{item.jiage*item.value}}</span></p>
      </li>
    </ul>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          lists:[],
        }
      },
      
        created() {
          this.lists = this.$store.state.jiesuan;
        },
    }
</script>

<style scoped lang="scss">
.liebiao{
    margin-top: 6px;
    background: white;
    padding: 12px;
    border-radius: 20px;
    margin-bottom: 20px;
    li{
      margin: 6px 0;
      position: relative;
      .dianming{
        font-size: 12px;
        color: #333333;
        margin-bottom: 20px;
      }
      .neirong{
        position: relative;
        width: 100%;
        display: flex;
        .img{
          height: 90px;
          width: 90px;
          img{
            width: 100%;
          }
        }
        .main{
          font-size: 12px;
          flex: 1;
          margin: 0 24px 0 12px;
         
        }
        .qian{
           p:nth-child(1){
            font-size: 10px;
          }
          p:nth-child(2){
            font-size: 9px;
            color: #9999B3;
            text-align: right;
          }
        }
        
      }
      .xiaoji{
        position: absolute;
        right: 12px;
        bottom: 12px;
        font-size: 12px;
        span:nth-child(1){
          color: #999999;
        }
        span:nth-child(2){
          color: #151515;
        }
        span:nth-child(3){
          color: #FF5000;
        }
      }
    }
  }
</style>