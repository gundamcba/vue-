<template>
  <div class="dingdan">
    <!-- <Toubu /> -->
    <div class="sosuo">
      <input placeholder="搜索全部订单" class="sos" type="text" />
      <button>搜索</button>
    </div>
    <div class="liebiao">
      <ul v-for="(item, index) in lists" :key="index">
        <li>
          <div class="top">
            <span class="left">{{item.dianming}}</span>
            <span class="right">交易成功</span>
          </div>
          <div class="main">
            <div class="top">
              <img :src="item.url" alt @click="Toxiangqing(index)" />
              <div class="xiangqing">{{item.biaoti}}</div>
            </div>
            <div class="bottom"><span>X{{item.value}}</span><span>¥{{item.jiage*item.value}}</span></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Toubu from "@/components/dingdan/Toubu.vue";
export default {
  data() {
    return {
      lists: []
    };
  },
  methods: {
    Toxiangqing(i) {
      this.$router.push({ path: "/xiangqing?id=" + this.lists[i].id });
    }
  },
  components: {
    Toubu
  },
  created() {
    this.lists = this.$store.state.jiesuan;
  }
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
.dingdan {
  width: 100%;

  height: 100%;
  background: #f5f5f5;
  top: 0;
  bottom: 0;
  padding-bottom: 41px;
  margin: auto;
}

.sosuo {
  padding: 12px;
  background: #f5f5f5;
  display: flex;
  .sos {
    flex: 1;
    height: 26px;
    border: none;
    font-size: 12px;
    color: #757575;
    border-radius: 20px;
    text-indent: 28px;

    // position: absolute;
  }
  button {
    height: 26px;
    width: 75px;
    font-size: 12px;
    background: #f50;
    outline: none;
    border-radius: 20px;
    border: none;
    color: white;
    float: right;
    margin-left: 12px;
  }
}
.liebiao {
  width: 100%;
  ul {
    padding: 12px 12px 0 12px;

    li {
      width: 100%;
      height: 224px;
      background: white;
      border-radius: 20px;
      padding: 16px 0 9px;
      margin-bottom: 12px;
      position: relative;
      > .top {
        padding-left: 11px;
        padding-right: 12px;
        .left,
        .right {
          font-size: 12px;
        }
        .left {
          float: left;
          color: black;
        }
        .right {
          float: right;
          color: #f50;
        }
      }
      .main {
        padding: 12px;
        margin-top: 16px;
        .top {
          width: 100%;
          display: flex;

          img {
            width: 86px;
            height: 86px;
            margin-right: 12px;
          }
          .xiangqing {
            flex: 1;
          }
        }
        .bottom{
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          font-size: 12px;
          span{
            &:nth-child(2){
              float: right;
            }
          }

        }
      }
    }
  }
}
</style>