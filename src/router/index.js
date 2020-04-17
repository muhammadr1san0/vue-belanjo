import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login/index.vue'
import Register from '../views/Auth/Signup/index.vue'
import Auth from '../views/Auth/index.vue'
import About from '../views/About.vue'
// import { store } from '../store/store'
import Home from '../views/Main/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
    children: [
      {
        path: 'register',
        name: 'register',
        component: Register,
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: 'login',
        name: 'login',
        component: Login,
        meta: {
          requiresVisitor: true
        }
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.getters.loggedIn) {
//       next({
//         name: 'login'
//       })
//     } else {
//       next()
//     }
//   } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//     if (store.getters.loggedIn) {
//       next({
//         name: 'todo'
//       })
//     } else {
//       next()
//     }
//   }
// })

export default router
