export const state = () => ({
  characters: [],
  character: null,
  filters: {
    name: null,
    status: null,
    gender: null
  },
  page: 1,
  loading: false
})
export const getters = {
  get (state) {
    return state.characters
  },
  show (state) {
    return state.character
  },
  page (state) {
    return state.page
  },
  filters (state) {
    return state.filters
  },
  loading (state) {
    return state.loading
  }
}
export const actions = {
  async get ({ commit, state }) {
    commit('loading', true)
    const { data, status } = await this.$axios.get('/api-characters/', {
      params: {
        ...state.filters,
        page: state.page
      }
    })

    if (status === 200) {
      commit('get', data)
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
  },
  setPage ({ commit }, page) {
    commit('setPage', page)
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
  setPage (state, page) {
    state.page = page
  },
  loading (state, isLoading) {
    state.loading = isLoading
  }
}
