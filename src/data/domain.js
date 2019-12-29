import axios from "axios";

const state = {
  data: JSON.parse(localStorage.getItem("data")),
  isUpdated: false
};
const mutations = {
  setDomain(state, payload) {
    state.data = payload;
    state.isUpdated = true;
    console.log(`State Updated:`, payload);
  }
};
const actions = {
  updateDomain({ commit }) {
    axios
      .get("http://localhost:3000/api")
      .then(res => {
        commit("setDomain", res.data);
        localStorage.setItem("data", JSON.stringify(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  }
};
const getters = {
  domain: state => {
    return state.data;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
