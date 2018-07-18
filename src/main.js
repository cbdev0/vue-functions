// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var ai = require('applicationinsights');
ai.setup(process.env.APPLICATIONINSIGHTSKEY || '53bf75db-c059-493c-ab1b-5249d55a088e').start();