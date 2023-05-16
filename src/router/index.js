import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DevicesListView from '../views/DevicesListView.vue'
import EditDeviceFormView from '../views/EditDeviceFormView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/devices', name: 'devices', component: DevicesListView },
  { path: '/device/edit/:id', name: 'deviceedit', component: EditDeviceFormView },
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
