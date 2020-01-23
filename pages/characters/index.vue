<template>
  <main>
    <Header>
      <template slot="title">
        <h1>Characters</h1>
      </template>
      <template slot="description">
        <p class="h3">
          Existence is pain!!
        </p>
      </template>
    </Header>
    <div class="bg-main">
      <div class="container-extra">
        <Filters />
        <div class="characters grid columns-4">
          <Loading v-if="loading" />
          <div v-for="(character, index) in characters.results" :key="index" class="column">
            <Character :character="character" />
          </div>
        </div>
        <Pagination :info="characters.info" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../../components/partials/Header'
import Filters from '../../components/commons/Filters'
import Pagination from '../../components/commons/Pagination'
import Loading from '../../components/commons/Loading'
import Character from '../../components/characters/CharacterCard'

export default {
  components: {
    Header,
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
.bg-main {
  background-color: #eeeeee;
  padding: 2rem 0;
}

.characters {
  position: relative;
}
</style>
