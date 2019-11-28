import Vue from "vue";
import {
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon,
  Grid,
  GridItem,
  Icon,
  List,
  Search,
  Stepper,
  SubmitBar,
  Swipe,
  SwipeItem
} from "vant";
import { Field } from "vant";
import { Cell, CellGroup } from "vant";
import { NavBar } from "vant";
import { Button } from "vant";
import { AddressList } from "vant";
import { AddressEdit } from 'vant';
import { Area } from 'vant';

Vue.use(Area);
Vue.use(AddressEdit);
Vue.use(AddressList);
Vue.use(Button);
Vue.use(NavBar);

Vue.use(Cell).use(CellGroup);

Vue.use(Field);
Vue.use(Grid)
  .use(GridItem)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Icon)
  .use(SubmitBar)
  .use(Stepper)
  .use(List);
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
axios.defaults.baseURL = "http://47.97.189.174:10000";
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
