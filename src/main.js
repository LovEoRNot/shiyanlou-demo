import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import './assets/css/style.css'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: function (h) {  
    return h(App);  
  }
})
