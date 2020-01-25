export const state = () => ({
  characters: [],
  character: null,
  filters: {
    name: null,
    status: null,
    gender: undefined
  },
  loading: false
})
export const getters = {
  get (state) {
    return state.characters
  },
  show (state) {
    return state.character
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
      const { data, status } = await this.$axios.get('/api-characters/', {
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
    const { data, status } = await this.$axios.get(`/api-characters/${id}`)

    if (status === 200) {
      const episodes = []
      for (const episode of data.episode) {
        episodes.push(episode.replace('https://rickandmortyapi.com/api/episode/', ''))
      }

      const { data: episodesData, status: episodesStatus } = await this.$axios.get(`/api-episodes/${episodes.join()}`)
      if (episodesStatus === 200) {
        data.episodes = episodesData
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
    state.characters = data
  },
  show (state, data) {
    state.character = data
  },
  setFilters (state, filters) {
    state.filters = { ...filters }
  },
  loading (state, isLoading) {
    state.loading = isLoading
  }
}
