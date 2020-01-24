export const state = () => ({
  page: 1
})
export const getters = {
  page (state) {
    return state.page
  }
}
export const actions = {
  setPage ({ commit }, page = 1) {
    commit('setPage', page)
  }
}
export const mutations = {
  setPage (state, page) {
    state.page = page
  }
}
