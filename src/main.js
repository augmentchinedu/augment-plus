import Vue from 'vue';
import App from './App.vue';
import router from './routes/index';
import Vuex from 'vuex';
import VueAgile from 'vue-agile';
import store from './data';
import utility from './util';
import axios from 'axios';

axios.defaults.baseURL = `${process.env.VUE_APP_BACKEND_URL}/api`;
axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';

// Import CSS
import './assets/css/style.css';

Vue.config.productionTip = false;
Vue.use(VueAgile);
Vue.use(Vuex);

Vue.mixin(utility);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
