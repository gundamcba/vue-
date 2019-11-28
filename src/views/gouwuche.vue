<template>
  <div>
    <div class="toubu">
      <p class="gouwuche">购物车({{shuliang}})</p>
      <p class="guanli">管理</p>
      <p class="baobei">共{{shuliang}}件宝贝</p>
      <ul >
        <li v-for="(item,i) in lists" :key="i">
          <div class="top">
            <p>{{item.dianming}}</p>
          </div>
          <div class="bottom">
            <div class="left">
              <input type="checkbox" v-model="item.bool" />
              <img :src="item.url" />
            </div>
            <div class="main">内容</div>
            <div class="bom">
              <div class="jiage">¥{{item.jiage}}</div>
            </div>
          </div>
          <div class="shuliang">
            <van-stepper v-model="item.value" />
          </div>
        </li>
      </ul>
    </div>
    <div class="tijiao">
      <div class="quanxuan">
        <input type="checkbox" :checked="setbool" @click="quanxuan(setbool)" />全选
      </div>
      <div class="jiesuan">
        <span>不含运费</span>合计:
        <span>¥{{heji}}</span>
        <button @click="jiesuan">结算({{length}})</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists:[{}],
      gouwuche:[],
      bool: true
    };
  },
  computed: {
    //计算选中的价钱
    heji() {
      var jiage = 0;
      this.lists.forEach((value, i) => {
        if (value.bool) {
          jiage += value.value * value.jiage
        }
      });
      return jiage;
    },
    // 判定是否全选
    setbool() {
      return this.lists.every(value => value.bool);
    },
    // 计算购物车有多少件商品
    shuliang() {
      return this.lists.length;
    },
    // 选中数量
    length(){
      var num = 0;
      this.lists.forEach((value,i)=>{
        if (value.bool) {
          num+=1
        }
      })
      return num;
    }
  },

  methods: {
    quanxuan(data) {
      this.lists.forEach(value => {
        value.bool = !data;
      });
    },
    jiesuan(){
      if (this.length == 0) {
        alert("你还没有选择物品")
      }else{
        this.lists.forEach((value)=>{
          if (value.bool == true) {
            this.gouwuche.push(value);
            this.$store.state.jiesuan=this.gouwuche;
           this.$router.push({path:"/fukuangyemian"});
          }
          
        })
        
      }
    }
  },
  created() {
    
    if(this.$store.state.gouwuche[0]==undefined ||this.$store.state.gouwuche.length == 0 ||this.$store.state.gouwuche[0].id==undefined){
      this.$router.push({path:"/gouwuchewu"})
    }
  },
  mounted() {
    this.lists=this.$store.state.gouwuche
  },


};
</script>

<style scoped lang="scss">
.toubu {
  height: 174px;
  width: 100%;
  background: linear-gradient(to right, #fd9126, #ff5000);
  position: relative;

  p {
    position: absolute;
    color: white;
  }
  .gouwuche {
    left: 12px;
    top: 20px;
    font-size: 24px;
    font-weight: bold;
  }
  .guanli {
    right: 12px;
    top: 24px;
    font-size: 14px;
  }
  .baobei {
    left: 12px;
    top: 56px;
    font-size: 12px;
  }
  ul {
    position: relative;
    top: 91px;
    padding: 6px 12px 0 12px;
    margin-bottom: 100px;
    li {
      width: 100%;
      height: 180px;
      background: white;
      margin: 0px 0 6px 0;
      border-radius: 19px;
      position: relative;
      .top {
        padding: 12px 13px;
        > p {
          color: black;
          font-size: 10px;
        }
      }
      .bottom {
        padding: 12px 10px;
        .left {
          float: left;
          input {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
          }
          img {
            width: 90px;
            height: 90px;
            display: inline-block;
          }
        }

        .main {
          float: right;
        }
        .bom {
          position: absolute;
          display: flex;
          bottom: 12px;
          left: 150px;
          .jiage {
            color: #f50;
            font-size: 12px;
          }
        }
      }
      .shuliang {
        position: absolute;
        text-align: center;
        width: 100px;
        right: 0;
        bottom: 12px;
      }
    }
  }
}
.tijiao {
  width: 100%;
  height: 54px;
  background: white;
  position: fixed;
  bottom: 41px;
  .quanxuan {
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 54px;
    font-size: 11px;
  }
  .jiesuan {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 12px;
    line-height: 54px;
    font-size: 12px;
    span:nth-child(1) {
      color: #999999;
      margin-right: 7px;
    }
    span:nth-child(2) {
      color: #f50;
    }
    button {
      height: 31px;
      width: 84px;
      border-radius: 22px;
      background: linear-gradient(to right, #fd9126, #ff5000);
      margin-top: 12px;
      line-height: 31px;
      margin-left: 12px;
      color: white;
    }
  }
}
</style>