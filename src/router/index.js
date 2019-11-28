import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: () => import("../views/shouye.vue")
  },
  {
    path: "/shouye",
    name: "首页",
    component: () => import("../views/shouye.vue")
  },
  {
    path: "/denglu",
    name: "登录",
    component: () => import("../views/denglu.vue")
  },
  {
    path: "/zhuche",
    name: "登录",
    component: () => import("../views/zhuche.vue")
  },
  {
    path: "/dingdan",
    name: "订单",
    component: () => import("../views/dingdan.vue")
  },
  {
    path: "/dingdanyemian",
    name: "订单页面",
    component: () => import("../views/dingdanyemian.vue")
  },
  {
    path: "/fukuangyemian",
    name: "付款页面",
    component: () => import("../views/fukuangyemian.vue")
  },
  {
    path: "/gouwuche",
    name: "购物车",
    component: () => import("../views/gouwuche.vue")
  },
  {
    path: "/gouwuchewu",
    name: "购物车无",
    component: () => import("../views/gouwuchewu.vue")
  },
  {
    path: "/guanlishouhuodizhi",
    name: "管理收货地址",
    component: () => import("../views/guanlishouhuodizhi.vue")
  },
  {
    path: "/bianjidizhi",
    name: "管理收货地址",
    component: () => import("../views/bianjidizhi.vue")
  },
  {
    path: "/sosuo",
    name: "搜索",
    component: () => import("../views/sosuo.vue")
  },
  {
    path: "/wode",
    name: "我的淘宝",
    component: () => import("../views/wode.vue")
  },
  {
    path: "/xiangqing",
    name: "详情",
    component: () => import("../views/xiangqing.vue")
  },
  {
    path: "/gengduo",
    name: "更多",
    component: () => import("../views/gengduo.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
