import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AzureLearning from '@/components/AzureLearning/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/azure',
      name: 'AzureLearning',
      component: AzureLearning
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
