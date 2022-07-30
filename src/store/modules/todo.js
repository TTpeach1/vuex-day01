export default {
  namespaced: true,
  state: {
    list: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  getters: {},
  mutations: {
    // 上传数据
    // getMutaList(state, payload) {
    //   state.list = payload
    // },
    // 删除数据
    delMutaItem(state, payload) {
      state.list.splice(payload, 1)
    },
    // 添加
    addMutaItem(state, payload) {
      state.list.unshift(payload)
    },
    // 高亮
    isMutaToggle(state, payload) {
      state.list[payload].done = !state.list[payload].done
    }
  },
  actions: {
    // 上传数据
    // getActionsList(context, data) {
    //   context.commit('getMutaList', data)
    // },
    // 删除数据
    delActionItem(context, data) {
      context.commit('delMutaItem', data)
    },
    // 添加
    addActionItem(context, data) {
      context.commit('addMutaItem', data)
    },
    // 高亮
    isActionToggle(context, data) {
      context.commit('isMutaToggle', data)
    }
  }
}
