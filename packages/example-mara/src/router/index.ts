import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
  },
  {
    path: '/custom-style',
    name: 'custom-style',
    component: () => import(/* webpackChunkName: "custom-style" */ '../views/custom-style/index.vue'),
  },
  {
    path: '/custom-component',
    name: 'custom-component',
    component: () => import(/* webpackChunkName: "custom-component" */ '../views/custom-component/index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
