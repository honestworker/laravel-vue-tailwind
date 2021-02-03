import axios from 'axios';

const state = {
  user: null,
};

const getters = {
  isAuthenticated: state => !!state.user,
  stateUser: state => state.user,
};

const actions = {

};

const mutations = {
  setUser(state, username){
    state.user = username
  },
  logOut(state){
    state.user = null
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};