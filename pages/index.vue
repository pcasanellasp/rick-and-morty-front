<template>
  <div>
    <Filters />
    Characters
    <div class="characters">
      <Loading v-if="loading" />
      <div v-for="(character, index) in characters.results" :key="index">
        <p>
          <nuxt-link :to="{ name: 'id', params: { id: character.id }}">
            {{ character.name }}
          </nuxt-link>
        </p>
      </div>
      <Pagination :info="characters.info" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Filters from '../components/commons/Filters'
import Pagination from '../components/commons/Pagination'
import Loading from '../components/commons/Loading'

export default {
  components: {
    Filters,
    Pagination,
    Loading
  },
  computed: {
    ...mapGetters({
      characters: 'character/get',
      loading: 'character/loading'
    })
  },
  async asyncData ({ store }) {
    await store.dispatch('character/get')
  }
}
</script>
