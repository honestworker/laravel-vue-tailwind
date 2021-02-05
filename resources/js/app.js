/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import App from "./App.vue";
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import router from './router';
import store from './store';
import axios from 'axios';

// mouting point for the whole app

Vue.use(VueRouter);
Vue.use(Vuelidate);

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://testing.enrol.co.uk/';

Vue.config.productionTip = false

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {  
      originalRequest._retry = true;
      store.dispatch('logout')
      return router.push('/login')
    }
  }
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");