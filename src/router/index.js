import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AzureLearning from '@/components/AzureLearning'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/azure',
      name: AzureLearning
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

var ai = require('applicationinsights');
ai.setup(process.env.APPLICATIONINSIGHTSKEY || '53bf75db-c059-493c-ab1b-5249d55a088e').start();
