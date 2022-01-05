import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Rezepte from '@/views/Rezepte.vue'
import RezeptDetail from '@/components/RezeptDetail'
import SearchResult from '@/components/SearchResult'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/rezepte',
    name: 'Rezepte',
    component: Rezepte
  },
  {
    path: '/rezept-detail/:id',
    name: 'RezeptDetail',
    component: RezeptDetail
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchResult
  }
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
