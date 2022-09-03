import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 公共状态
const state = {
  arr: [],
  inputVal: ''
}
// 修改公共状态
const mutations = {
  handleAdd (state, params) {
    state.arr.push(params)
    state.inputVal = ''
  },
  handleDel (state, params) {
    state.arr.splice(params, 1)
  },
  handleChange (state, params) {
    state.inputVal = params
    console.log(state.inputVal)
  }
}

const actions = {
  handleAddAction ({commit}, val) {
    commit('handleAdd', val)
  },
  handleDelAction ({commit}, val) {
    commit('handleDel', val)
  },
  handleChangeAction ({commit}, val) {
    commit('handleChange', val)
  }
}
const getters = {
  arr_length (state) {
    return state.arr.length
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
