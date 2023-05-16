import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DevicesView from '../views/DevicesView.vue'
import EditDevice from '../views/EditDevice.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/devices', name: 'devices', component: DevicesView },
  { path: '/device/edit/:id', name: 'deviceedit', component: EditDevice },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
