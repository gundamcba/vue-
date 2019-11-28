<template>
  <div class="caini">
    <!-- <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      class="caini"
    > -->
      <ul>
        <li v-for="(item,i) in lists" :key="i" @click="GOxiangqing(i)">
          <img :src="item.url" alt />
          <div class="wenzi">{{item.biaoti}}</div>
          <div class="jiage">¥{{item.jiage}}</div>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
      loading: false,
      finished: false,
      num: 0,
      index: 0
    };
  },
  methods: {
    // onLoad() {
    //   this.timer = setTimeout(() => {
    //     let item = [
    //       {
    //         id: 1,
    //         dianming: "不知道1",
    //         url:
    //           "https://gw.alicdn.com/bao/uploaded/i1/2068664855/O1CN01Z9fanE1ljdSJ4Hemt_!!2068664855.jpg_500x500q90.jpg_.webp",
    //         biaoti:
    //           "【木木椅】家用餐椅实木椅子 简约电脑椅办公椅 特价咖啡椅 凳子",
    //         jiage: 110,
    //         value: 1,
    //         img: [
    //           "https://gw.alicdn.com/bao/uploaded/i1/2068664855/O1CN01Z9fanE1ljdSJ4Hemt_!!2068664855.jpg_500x500q90.jpg_.webp"
    //         ],
    //         bool: true
    //       },
    //       {
    //         id: 2,
    //         dianming: "不知道2",
    //         url:
    //           "https://gw.alicdn.com/bao/uploaded/i1/TB10hh8FVXXXXb2XFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",
    //         biaoti:
    //           "落地花瓶客厅简约仿真花套装欧式现代花器摆件会所酒店大堂样板房",
    //         jiage: 82.8,
    //         value: 1,
    //         img: [
    //           "https://gw.alicdn.com/bao/uploaded/i1/2068664855/O1CN01Z9fanE1ljdSJ4Hemt_!!2068664855.jpg_500x500q90.jpg_.webp"
    //         ],
    //         bool: true
    //       },
    //       {
    //         id: 3,
    //         dianming: "不知道3",
    //         url:
    //           "https://gw.alicdn.com/bao/uploaded/i4/2627883562/TB2lAJLXl_xQeBjy0FhXXbAoFXa_!!2627883562.jpg_500x500q90.jpg_.webp",
    //         biaoti:
    //           "台湾仿真食物马卡龙水果点心巧克力法式面包糕点食品生日蛋糕模型",
    //         jiage: 36,
    //         value: 1,
    //         img: [
    //           "https://gw.alicdn.com/bao/uploaded/i1/2068664855/O1CN01Z9fanE1ljdSJ4Hemt_!!2068664855.jpg_500x500q90.jpg_.webp"
    //         ],
    //         bool: true
    //       },
    //       {
    //         id: 4,
    //         dianming: "不知道4",
    //         url:
    //           "https://gw.alicdn.com/bao/uploaded/i1/2167651772/O1CN01BlDxOM1OxcOfbvNFz_!!2167651772.jpg_500x500q90.jpg_.webp",
    //         biaoti:
    //           "现代简约双层铁艺床上下铺成人带书桌双人床学生儿童子母床高低床",
    //         jiage: 999,
    //         value: 1,
    //         img: [
    //           "https://gw.alicdn.com/bao/uploaded/i1/2068664855/O1CN01Z9fanE1ljdSJ4Hemt_!!2068664855.jpg_500x500q90.jpg_.webp"
    //         ],
    //         bool: true
    //       },
    //       {
    //         id: 5,
    //         dianming: "不知道5",
    //         url:
    //           "https://gw.alicdn.com/bao/uploaded/i1/31415440/TB2ldZ8tXXXXXXoXpXXXXXXXXXX_!!31415440.jpg_500x500q90.jpg_.webp",
    //         jiage: 89.6,
    //         biaoti:
    //           "天然落地荷叶干枝独家制作假花装饰花客厅室内装饰干花真花干荷花",
    //         bool: true,
    //         value: 1
    //       },
    //       {
    //         id: 6,
    //         dianming: "不知道6",

    //         url:
    //           "https://gw.alicdn.com/bao/uploaded/i1/2406931838/O1CN01ehgWQT1PRqTBhex9V_!!0-item_pic.jpg_500x500q90.jpg_.webp",
    //         biaoti:
    //           "【清华正版】Java从入门到精通(第5五版) java语言程序设计电脑编程序员计算机软件开发教程JAVA编程入门零基础自学书籍javascript",
    //         jiage: 48.8,
    //         bool: true,
    //         value: 1
    //       },
    //       {
    //         id: 7,
    //         dianming: "不知道7",

    //         url:
    //           "https://gw.alicdn.com/bao/uploaded/i2/2248304671/O1CN01v0DcdM1kNMam9HaZu_!!0-item_pic.jpg_500x500q90.jpg_.webp",
    //         biaoti:
    //           "欧舒丹樱花身体乳全身保湿补水滋润香氛润肤露女香体留香冬不干燥",
    //         jiage: 260,
    //         bool: true,
    //         value: 1
    //       },
    //       {
    //         id: 8,
    //         dianming: "不知道8",

    //         url:
    //           "https://gw.alicdn.com/bao/uploaded/TB1UpZnirH1gK0jSZFwXXc7aXXa.jpg_500x500q90.jpg_.webp",
    //         biaoti:
    //           "鱼庄主50包香辣小鱼仔麻辣小鱼干休闲食品湖南特产零食小吃小包装",
    //         jiage: 18.9,
    //         bool: true
    //       }
    //     ];
    //     for (var i = 0; i < item.length/2; i++) {
    //       this.lists.push(item[i + this.index]);
    //     }
    //     this.index += 2;
    //     this.$store.state.lists;

    //     this.$store.state.num++;
    //     // 加载状态结束
    //     this.loading = false;
    //     // 数据全部加载完成
    //     if (this.$store.state.num > 1) {
    //       this.finished = true;
    //     }
    //   }, 1000);
    // },
    GOxiangqing(i) {
      this.$router.push({ path: "/xiangqing" + "?id=" + this.lists[i].id });
    }
  },
  created() {
    this.lists = this.$store.state.lists;
  }
};
</script>

<style scoped lang="scss">
.caini {
 
  background: white;
  position: relative;
  
  > ul {
    width: 100%;
    
    position: absolute;
    font-size: 12px;
    left: 0;
    top: 0;
    bottom: 1px;
    right: 0;

    li {
      float: left;
      width: 50%;
      margin: 6px 0;
      &:nth-last-child(1),&:nth-last-child(2){
        margin: 6px 0 20px 0;;
        padding: 0 0 41px 0;
      }
      

      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .wenzi {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 11px;
        color: #333333;
      }
      .jiage {
        color: #f50;
      }
    }
  }
}
</style>