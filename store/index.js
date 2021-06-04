import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
/*
const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: 'This is store message',
        counter: 0
      }
    },
    mutations: {
      count: function(state, n) {
        state.counter += n
      },
      say: function(state, msg) {
        state.message = msg
      },
      reset: function(state, obj) {
        state.message = obj.message
        state.counter = 0
      }
    },
    actions: {
      doit: function(context) {
        var n = Math.floor(Math.random() * 10)
        context.commit('count', n)
        context.commit('say', 'add ' + n + '!')
      }
    },
    plugins: [createPersistedState()]
  })
}

export default createStore*/

export const state = () => ({
  message: 'count number',
  counter: 0
})

export const mutations = {
  doit: function(state) {
    var n = Math.floor(Math.random() * 10)
    state.counter += n
    state.message = 'add ' + n + '!'
  },
  reset(state, obj) {
    state.counter = 0
    state.message = obj.msg
  }
}

export const plugins = [createPersistedState()]
