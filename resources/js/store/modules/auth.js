import axios from 'axios';

const state = {
  status: '',
  token: localStorage.getItem('token') || '',
  user : {},
  guard : '',
};

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  authGuard: state => state.guard,
};

const actions = {
  async register({}, user) {
    await axios.post('api/register', user)
  },
  async login({commit}, user) {
    commit('auth_request')
    let resp = await axios.post('api/login', user)
    const token = resp.data.data.token
    const UserData = resp.data.data.user
    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    commit('auth_success', token, UserData)
  },
  async logout({commit}) {
    commit('logout')
    await axios.post('api/logout', { headers: { Authorization: axios.defaults.headers.common['Authorization'] } })
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
  },
};

const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, token, user) {
    state.status = 'success'
    state.token = token
    state.user = user
    if (1) {
      state.guard = 'admin'
    }
  },
  auth_error(state) {
    state.status = 'error'
  },
  logout(state) {
    state.status = ''
    state.token = ''
    state.guard = ''
    state.user = {}
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};