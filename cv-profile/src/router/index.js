import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/music',
    name: 'Music',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Music.vue')
  }, 
  {
    path:'/videos', 
    name:'Videos', 
    component: ()=> import('../views/Videos.vue')
  }, 
  {
    path:'/AnqiCv',
    name:'AnqiCv', 
    component: ()=> import('../views/AnqiCv.vue')
  },
  {
    path:'/backEnd',
    name:'backEnd', 
    component: ()=> import('../views/backEnd.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router