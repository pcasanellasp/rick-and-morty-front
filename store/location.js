export const state = () => ({
  locations: [],
  location: null,
  filters: {
    name: null,
    type: null,
    dimension: null
  },
  loading: false
})
export const getters = {
  get (state) {
    return state.locations
  },
  show (state) {
    return state.location
  },
  filters (state) {
    return state.filters
  },
  loading (state) {
    return state.loading
  }
}
export const actions = {
  async get ({ commit, state }, page) {
    commit('loading', true)
    try {
      const { data, status } = await this.$axios.get('/api-locations/', {
        params: {
          ...state.filters,
          page
        }
      })
      if (status === 200) {
        commit('get', data)
      }
    } catch (error) {

    }

    commit('loading', false)
  },
  async show ({ commit }, id) {
    const { data, status } = await this.$axios.get(`/api-locations/${id}`)

    if (status === 200) {
      const residents = []
      for (const resident of data.residents) {
        residents.push(resident.replace('https://rickandmortyapi.com/api/character/', ''))
      }

      const { data: residentsData, status: residentsStatus } = await this.$axios.get(`/api-characters/${residents.join()}`)
      if (residentsStatus === 200) {
        data.resident = residentsData
      }

      commit('show', data)
    }
  },
  setFilters ({ commit }, filters) {
    commit('setFilters', filters)
  }
}
export const mutations = {
  get (state, data) {
    state.locations = data
  },
  show (state, data) {
    state.location = data
  },
  setFilters (state, filters) {
    state.filters = { ...filters }
  },
  loading (state, isLoading) {
    state.loading = isLoading
  }
}
