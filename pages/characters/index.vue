<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="is-size-1">
            Characters
          </h1>
          <p class="is-size-4">
            Existence is pain
          </p>
        </div>
      </div>
    </section>
    <div class="container">
      <Filters />
      <div class="characters columns is-multiline">
        <Loading v-if="loading" />
        <div v-for="(character, index) in characters.results" :key="index" class="column is-one-fifth">
          <Character :character="character" />
        </div>
      </div>
      <Pagination :info="characters.info" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Filters from '../../components/commons/Filters'
import Pagination from '../../components/commons/Pagination'
import Loading from '../../components/commons/Loading'
import Character from '../../components/characters/CharacterCard'

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
