import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Loading from '@/components/Loading'
import Menu from '@/components/Menu'
import Tabbar from '@/components/Tabbar.vue'

// import Test from '@/components/Test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
        {
      path: '/test',
      name: 'test',
      component: Tabbar
    },
    //     {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // }
  ]
})
