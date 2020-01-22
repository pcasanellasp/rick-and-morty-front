<template>
  <div>
    <Filters />
    <h1 class="title">
      Characters
    </h1>
    <div class="characters columns is-multiline">
      <Loading v-if="loading" />
      <div v-for="(character, index) in characters.results" :key="index" class="column is-one-fifth">
        <Character :character="character" />
      </div>
    </div>
    <Pagination :info="characters.info" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Filters from '../components/commons/Filters'
import Pagination from '../components/commons/Pagination'
import Loading from '../components/commons/Loading'
import Character from '../components/characters/CharacterCard'

export default {
  components: {
    Filters,
    Pagination,
    Loading,
    Character
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

<style>
.characters {
  position: relative;
}
</style>
