//import Vue from 'vue'
//import Router from 'vue-router'
//import { Router } from "vue-router";
import { createRouter, createWebHistory } from 'vue-router'

import gant from './components/gant.vue'

//Vue.use(VueRouter)



const router =  new createRouter({
  // mode: 'history',
  //base: process.env.BASE_URL,
    history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'gant',
      component: gant
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

export default router

