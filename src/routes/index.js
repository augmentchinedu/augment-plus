import Vue from "vue";
import Router from "vue-router";

//routes
import Client from "./client";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [Client]
});
