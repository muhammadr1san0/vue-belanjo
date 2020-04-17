import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    filter: 'all',
    token: null,
    todos: [
      {
        id: 1,
        title: 'Finish Vue Screencast',
        completed: false,
        editing: false
      },
      {
        id: 2,
        title: 'Take over world',
        completed: false,
        editing: false
      },
      {
        id: 3,
        title: 'make ',
        completed: false,
        editing: false
      }
    ]
  },
  getters: {
    remaining (state) {
      return state.todos.filter(todo => !todo.completed).length
    },
    anyRemaining (state, getters) {
      return getters.remaining !== 0
    },
    todosFiltered (state) {
      if (state.filter === 'all') {
        return state.todos
      } else if (state.filter === 'active') {
        return state.todos.filter(todo => !todo.completed)
      } else if (state.filter === 'completed') {
        return state.todos.filter(todo => todo.completed)
      }
      return state.todos
    },
    showClearCompletedButtom (state) {
      return state.todos.filter(todo => todo.completed).length > 0
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        editing: false
      })
    },
    updateTodo (state, todo) {
      const index = state.todos.findIndex(item => item.id === todo.id)
      state.todos.splice(index, 1, {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        editing: todo.editing
      })
    },
    deleteTodo (state, id) {
      const index = state.todos.findIndex(item => item.id === id)
      state.todos.splice(index, 1)
    },
    checkAll (state, checked) {
      state.todos.forEach(todo => (todo.completed = checked))
    },
    updateFilter (state, filter) {
      state.filter = filter
    },
    clearCompleted (state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    },
    retrieveToken (state, token) {
      state.token = token
    },
    destroyToken (state) {
      state.token = null
    }
  },
  actions: {
    addTodo (context, todo) {
      setTimeout(() => {
        context.commit('addTodo', todo)
      }, 1000)
    },
    updateTodo (context, todo) {
      setTimeout(() => {
        context.commit('updateTodo', todo)
      }, 1000)
    },
    deleteTodo (context, id) {
      setTimeout(() => {
        context.commit('deleteTodo', id)
      })
    },
    checkAll (context, checked) {
      setTimeout(() => {
        context.commit('checkAll', checked)
      }, 1000)
    },
    updateFilter (context, filter) {
      setTimeout(() => {
        context.commit('updateFilter', filter)
      }, 1000)
    },
    clearCompleted (context) {
      setTimeout(() => {
        context.commit('clearComputed')
      }, 1000)
    },
    retrieveToken (context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {
          username: credentials.username,
          password: credentials.password
        })
          .then(response => {
            const token = response.data.access_token
            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    destroyToken (context) {
      // eslint-disable-next-line dot-notation
      axios.defaults.headers.common['Authorization'] = 'Bearer' + context.state.token
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
            .then(response => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response)
            })
            .catch(error => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },
    register (context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/register', {
          name: data.name,
          email: data.email,
          password: data.password
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
})
