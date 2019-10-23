import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "./plugins/avue.js";
import "./plugins/axios.js";
import "./assets/iconfont/iconfont.css";
import "./mock/mock.js";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
