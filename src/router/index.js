import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Loading from '@/components/Loading'
import Menu from '@/components/Menu'
import Tabbar from '@/components/Tabbar.vue'
import VirusStats from '@/components/VirusStats.vue'
import HomePage from '@/components/HomePage.vue'
import Planner from '@/components/Planner.vue'
import Policies from '@/components/Policies.vue'
import CardNumberBox from '@/components/CardNumberBox.vue'
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
      component: Menu,
      children:[
        {
          path: 'home',
          name: 'Home',
          component: HomePage
        },
                {
          path: 'policies',
          name: 'Policies',
          component: Planner
        },
                {
          path: 'planner',
          name: 'Planner',
          component: Planner
        },
        {
          path: 'virus',
          name: 'Virus',
          component: VirusStats
        }
      ]
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
