export const state = () => ({
  episodes: [],
  episode: null,
  filters: {
    name: null,
    episode: null
  },
  loading: false
})
export const getters = {
  get (state) {
    return state.episodes
  },
  show (state) {
    return state.episode
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
      const { data, status } = await this.$axios.get('/api-episodes/', {
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
    const { data, status } = await this.$axios.get(`/api-episodes/${id}`)

    if (status === 200) {
      const characters = []
      for (const character of data.characters) {
        characters.push(character.replace('https://rickandmortyapi.com/api/character/', ''))
      }

      const { data: charactersData, status: charactersStatus } = await this.$axios.get(`/api-characters/${characters.join()}`)
      if (charactersStatus === 200) {
        data.character = charactersData
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
    state.episodes = data
  },
  show (state, data) {
    state.episode = data
  },
  setFilters (state, filters) {
    state.filters = { ...filters }
  },
  loading (state, isLoading) {
    state.loading = isLoading
  }
}
