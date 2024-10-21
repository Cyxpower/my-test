import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "amfe-flexible"
Vue.use(VueAxios, axios)
Vue.use(Vuex)
axios.defaults.baseURL = 'http://www.kangliuyong.com:10002' //远程服务器瑞幸咖啡端
// axios.defaults.baseURL = 'http://192.168.1.108:10002'; //局域网端
//axios.defaults.baseURL = 'http://127.0.0.1:10002'; //本机端
// axios.defaults.baseURL = 'http://124.222.196.87:10002'; //壮成服务器端
// axios.defaults.baseURL = 'http://120.27.232.26:10002'; //我自己的服务器端

Vue.use(ElementUI);
import {
  Tag,
  Button,
  Swipe,
  SwipeItem,
  Lazyload,
  Popover,
  Sku,
  Card,
  Dialog,
  Tabbar,
  TabbarItem,
  Search,
  Toast,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  NavBar,
  Skeleton,
  Stepper,
  Form,
  Field,
  CellGroup,
  Popup,
  List,
  Checkbox,
  CheckboxGroup,
  SubmitBar,
  Uploader,
  Icon,
  Empty,
  AddressEdit,
  Tab,
  Tabs,
  AddressList,
  NumberKeyboard,
  Circle,
  ShareSheet,
  Cell,
  Rate,
  Grid,
  GridItem,
  NoticeBar,
  CountDown
} from 'vant';
Vue.use(CountDown)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Tag)
Vue.use(Rate)
Vue.use(Popover);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sku);
Vue.use(Lazyload);
Vue.use(Card);
Vue.use(Dialog);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Toast);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(NavBar);
Vue.use(Skeleton);
Vue.use(Stepper);
Vue.use(Popup);
Vue.use(Form);
Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SubmitBar);
Vue.use(Uploader);
Vue.use(Icon);
Vue.use(Empty);
Vue.use(AddressEdit);
Vue.use(AddressList);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(NumberKeyboard);
import 'lib-flexible/flexible'
Vue.use(Button)
Vue.use(Circle)
Vue.use(ShareSheet)
Vue.use(NoticeBar)

import 'animate.css'

Vue.prototype.appkey = "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA="
//axios拦截器，在发起请求之前执行

axios.interceptors.request.use(config => {

  //处理post请求参数, 进行参数序列化
  if (config.method == 'post') {

    //序列化post请求参数
    let paramsString = '';
    for (let key in config.data) {
      paramsString += `${key}=${config.data[key]}&`;
    }

    //重新赋值config.data
    config.data = paramsString.slice(0, -1);

    // 

  }

  //必须返回config
  return config;
})
//格式化日期
Vue.filter('formatDate', (v, format) => {

  // 
  // 

  //创建日期对象
  let date = new Date(v);

  //格式化年份
  let year = date.getFullYear().toString();
  // 
  if (/(y+)/.test(format)) {
    //获取匹配组的内容
    var content = RegExp.$1;
    // 
    format = format.replace(content, year.slice(year.length - content.length));
  }

  // 

  //格式化月份、日份、时、分、秒
  let o = {
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds()
  };

  // 

  for (let key in o) {
    //创建动态正则表达式
    let reg = new RegExp(`(${key}+)`);
    // 

    if (reg.test(format)) {
      //获取组匹配的内容
      let groupContent = RegExp.$1;
      // 

      format = format.replace(groupContent, o[key] >= 10 ? o[key] : groupContent.length == 2 ? '0' + o[key] : o[key]);
      // 
    }

  }

  return format;
})
Vue.filter('decimal', (v, n = 2) => {
  return v.toFixed(n);
})


Vue.prototype.$EventBus = new Vue();
Vue.config.productionTip = false
import swiper from 'swiper'
import 'swiper/swiper-bundle.css'
new Vue({
  swiper,
  router,
  render: h => h(App),
}).$mount('#app')