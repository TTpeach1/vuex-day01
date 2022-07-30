import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import color from './modules/color'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {},
  mutations: {
  },
  actions: {
  },
  modules: {
    todo,
    color
  },
  plugins: [
    // createVuexPersisted()
    createVuexPersisted({
      reducer(state) {
        // 返回什么对象
        return {
          todo: state.todo
          // color: state.color
        }
      }
    })
  ]
})
