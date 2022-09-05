import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/UserSignUp.vue'
import LoginUser from '../views/LoginUser.vue'
import registerOrLog from '../views/SignupOrLogin.vue'
import Password from '../views/ForgetPasswordForm.vue'
import Dashboard from '../views/Dashboardview.vue'
import GetAllBooks from '../components/DisplayBooks.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'RegistrationView',
    component: RegistrationView
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },

  {
    path: '/admin',
    name: registerOrLog,
    component: registerOrLog
  },

  {
    path: '/forgetpassword',
    name: Password,
    component: Password
    
  },

  {
    path: '/dash',
    name: 'dashboardUI',
    component:Dashboard, 
    children: [{ path: '/', name: 'GetAllBooks', component: GetAllBooks }],
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
