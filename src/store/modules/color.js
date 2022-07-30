export default {
  namespaced: true,
  state: {
    isShow: false
  },
  getters: {},
  mutations: {
    changeMutaColor(state) {
      state.isShow = !state.isShow
    }
  },
  actions: {
    changeActionColor(context) {
      context.commit('changeMutaColor')
    }
  },
  Plugin: {}
}
