import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Favourite from '../views/Favourite.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:resId',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component:Favourite
  }
]

const router = new VueRouter({
  routes
})

export default router
