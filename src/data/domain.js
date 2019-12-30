import axios from 'axios';

const state = {
    data: JSON.parse(localStorage.getItem('data')),
    posts: [],
    isUpdated: false
};
const mutations = {
    setDomain(state, payload) {
        state.data = payload;
        state.isUpdated = true;
        console.log(`State Updated:`, payload);
    },
    updatePosts(state, payload) {
        state.posts = payload;
    }
};
const actions = {
    updateDomain({ commit }) {
        axios
            .get('/')
            .then(res => {
                commit('setDomain', res.data);
                localStorage.setItem('data', JSON.stringify(res.data));
            })
            .catch(err => console.log(err));
        axios
            .get('/posts')
            .then(res => {
                commit('setDomain', res.data);
                localStorage.setItem('data', JSON.stringify(res.data));
            })
            .catch(err => console.log(err));
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
