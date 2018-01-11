// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import DropDownCategories from './components/DropDownCategories.vue'

Vue.component('drop-down-categories', require('./components/DropDownCategories.vue'));

Vue.config.productionTip = false

window._ = require('lodash');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
