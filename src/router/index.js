import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'

const routes = [{ path: '/', component: Home }]

export default createRouter({
  history: createWebHistory(),
  routes,
})
