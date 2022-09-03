import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShowName from '@/components/ShowName'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ShowName',
      name: '好像没啥用',
      component: ShowName
    }
  ]
})
