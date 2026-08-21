import { createRouter, createWebHistory } from 'kdu-router'
import Home from '../views/Home.kdu'
import About from '../views/About.kdu'
import Contact from '../views/Contact.kdu'

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
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
