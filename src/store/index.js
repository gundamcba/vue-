import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      {
        id: 1,
        dianming: "不知道1",
        url:
          "https://gw.alicdn.com/bao/uploaded/i1/2068664855/O1CN01Z9fanE1ljdSJ4Hemt_!!2068664855.jpg_500x500q90.jpg_.webp",
        biaoti: "【木木椅】家用餐椅实木椅子 简约电脑椅办公椅 特价咖啡椅 凳子",
        jiage: 110,
        value: 1,
        img: [
          "https://gw.alicdn.com/bao/uploaded/i1/2068664855/O1CN01Z9fanE1ljdSJ4Hemt_!!2068664855.jpg_500x500q90.jpg_.webp"
        ],
        bool: true,
        xiangqing:["标题1","图片1","标题1","图片1","标题1","图片1"]
      },
      {
        id: 2,
        dianming: "不知道2",
        url:
          "https://gw.alicdn.com/bao/uploaded/i1/TB10hh8FVXXXXb2XFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        biaoti: "落地花瓶客厅简约仿真花套装欧式现代花器摆件会所酒店大堂样板房",
        jiage: 82.8,
        value: 1,
        img: [
          "https://gw.alicdn.com/bao/uploaded/i1/2068664855/O1CN01Z9fanE1ljdSJ4Hemt_!!2068664855.jpg_500x500q90.jpg_.webp"
        ],
        bool: true,
        xiangqing:["标题2","图片2","标题2","图片2","标题2","图片2"]
      },
      {
        id: 3,
        dianming: "不知道3",
        url:
          "https://gw.alicdn.com/bao/uploaded/i4/2627883562/TB2lAJLXl_xQeBjy0FhXXbAoFXa_!!2627883562.jpg_500x500q90.jpg_.webp",
        biaoti: "台湾仿真食物马卡龙水果点心巧克力法式面包糕点食品生日蛋糕模型",
        jiage: 36,
        value: 1,
        img: [
          "https://gw.alicdn.com/bao/uploaded/i1/2068664855/O1CN01Z9fanE1ljdSJ4Hemt_!!2068664855.jpg_500x500q90.jpg_.webp"
        ],
        bool: true,
        xiangqing:["标题3","图片3","标题3","图片3","标题3","图片3"]
      },
      {
        id: 4,
        dianming: "不知道4",
        url:
          "https://gw.alicdn.com/bao/uploaded/i1/2167651772/O1CN01BlDxOM1OxcOfbvNFz_!!2167651772.jpg_500x500q90.jpg_.webp",
        biaoti: "现代简约双层铁艺床上下铺成人带书桌双人床学生儿童子母床高低床",
        jiage: 999,
        value: 1,
        img: [
          "https://gw.alicdn.com/bao/uploaded/i1/2068664855/O1CN01Z9fanE1ljdSJ4Hemt_!!2068664855.jpg_500x500q90.jpg_.webp"
        ],
        bool: true,
        value:1,
        xiangqing:["标题4","图片4","标题4","图片4","标题4","图片4"]
      },
      {
        id: 5,
        dianming: "不知道5",
        url:
          "https://gw.alicdn.com/bao/uploaded/i1/31415440/TB2ldZ8tXXXXXXoXpXXXXXXXXXX_!!31415440.jpg_500x500q90.jpg_.webp",
        jiage: 89.6,
        biaoti: "天然落地荷叶干枝独家制作假花装饰花客厅室内装饰干花真花干荷花",
        bool: true,
        value: 1,
        xiangqing:["标题5","图片5","标题5","图片5","标题5","图片5"]
      },
      {
        id: 6,
        dianming: "不知道6",

        url:
          "https://gw.alicdn.com/bao/uploaded/i1/2406931838/O1CN01ehgWQT1PRqTBhex9V_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        biaoti:
          "【清华正版】Java从入门到精通(第5五版) java语言程序设计电脑编程序员计算机软件开发教程JAVA编程入门零基础自学书籍javascript",
        jiage: 48.8,
        bool: true,
        value: 1,
        xiangqing:["标题6","图片6","标题6","图6片","标6题","图6片"]
      },
      {
        id: 7,
        dianming: "不知道7",

        url:
          "https://gw.alicdn.com/bao/uploaded/i2/2248304671/O1CN01v0DcdM1kNMam9HaZu_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        biaoti: "欧舒丹樱花身体乳全身保湿补水滋润香氛润肤露女香体留香冬不干燥",
        jiage: 260,
        bool: true,
        value: 1,
        xiangqing:["标7题","图7片","标7题","图7片","标7题","图7片"]
      },
      {
        id: 8,
        dianming: "不知道8",

        url:
          "https://gw.alicdn.com/bao/uploaded/TB1UpZnirH1gK0jSZFwXXc7aXXa.jpg_500x500q90.jpg_.webp",
        biaoti: "鱼庄主50包香辣小鱼仔麻辣小鱼干休闲食品湖南特产零食小吃小包装",
        jiage: 18.9,
        bool: true,
        vauel:1,
        xiangqing:["标8题","图8片","标8题","图8片","标题8","图8片"]
      }
    ],
    gouwuche: [{}],
    jiesuan: [],
    num: 0,
    index: 0,
    shouhuodizhi: [
      {
        id: 1,
        name: "张三",
        dianhua: "13000000000",
        dizhi: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
      },
      {
        id: 2,
        name: "李四",
        dianhua: "1310000000",
        dizhi: "浙江省杭州市拱墅区莫干山路 50 号"
      },
      {
        id: 3,
        name: "王五",
        dianhua: "1320000000",
        dizhi: "浙江省杭州市滨江区江南大道 15 号"
      }
    ],
    morendizhi: {
      id: "1",
      name: "张三",
      dianhua: "13000000000",
      dizhi: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
    },
    dizhiindex: null
  },
  mutations: {},
  actions: {},
  modules: {}
});
