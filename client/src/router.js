import Vue from 'vue'
import Router from 'vue-router'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Todo from './views/Todo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    }
  ]
})
