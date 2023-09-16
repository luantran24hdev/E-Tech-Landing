import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import VueAwesomeSwiper from "vue-awesome-swiper";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
require("dotenv").config();
import "swiper/css/swiper.css";
import "./assets/index.css";


Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
