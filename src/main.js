import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import Vuex from "vuex";
import store from "./data";
import utility from "./util";


// Import CSS
import './assets/css/style.css';

Vue.config.productionTip = false;
Vue.use(Vuex);

Vue.mixin(utility);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
