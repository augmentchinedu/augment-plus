import Vue from "vue";
import Vuex from "vuex";

import domain from "./domain";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    domain
  }
});
