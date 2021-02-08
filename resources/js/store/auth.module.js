import ApiService from "../common/api.service";
import JwtService from "../common/jwt.service";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  userRole(state) {
    return (state.user ? state.user.role : '');
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("auth/login", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data.data.user);
          resolve(data.data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise((resolve, reject) => {
        ApiService.post("auth/logout")
          .then(({ data }) => {
            context.commit(PURGE_AUTH);
            resolve();
          })
          .catch(({ response }) => {
            context.commit(SET_ERROR, response.data.errors);
            reject(response.data.errors);
          });
      });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("auth/register", credentials)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response.data.errors);
        });
    });
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise((resolve, reject) => {
        ApiService.get("auth/user")
          .then(({ data }) => {
            context.commit(SET_AUTH, data.data.user);
            resolve(data.data);
          })
          .catch(({ response }) => {
            context.commit(SET_ERROR, response.data.errors);
            reject(response.data.errors);
          });
      });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER](context, payload) {
    const { email, name, password, image } = payload;
    const user = {
      email,
      name,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("auth/user", user).then(({ data }) => {
      context.commit(SET_AUTH, data.data.user);
      return data.data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    if (state.user.token) {
      JwtService.saveToken(state.user.token);
    }
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};