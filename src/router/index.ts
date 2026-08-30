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
  routes
})

export default router