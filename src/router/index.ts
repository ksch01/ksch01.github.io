import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/MainView.vue'
import Imprint from '@/views/ImprintView.vue'
import Privacy from '@/views/PrivacyPolicy.vue'

const routes = [
  { path: '/', name: 'Home', component: Main },
  { path: '/impressum', name: 'Impressum', component: Imprint },
  { path: '/datenschutz', name: "Datenschutz", component: Privacy}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: window.innerWidth < 600 ? 192 : 64,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  }
})

export default router