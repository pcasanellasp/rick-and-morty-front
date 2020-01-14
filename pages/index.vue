<template>
  <div>
    <Filters />
    <div v-for="(character, index) in characters.results" :key="index">
      <p>
        <nuxt-link :to="{ name: 'id', params: { id: character.id }}">
          {{ character.name }}
        </nuxt-link>
      </p>
    </div>
    <Pagination :info="characters.info" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'

export default {
  components: {
    Filters,
    Pagination
  },
  computed: {
    ...mapGetters({
      characters: 'character/get'
    })
  },
  async asyncData ({ store }) {
    await store.dispatch('character/get')
  }
}
</script>
