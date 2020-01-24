<template>
  <main>
    <div class="bg-main">
      <div class="container-extra">
        <Filters />
        <div class="characters grid columns-4">
          <Loading v-if="loading" />
          <div v-for="(episode, index) in episodes.results" :key="index" class="column">
            {{ episode.name }}
            <nuxt-link :to="{ name: 'episodes-id', params: { id: episode.id }}" class="">
              View More
            </nuxt-link>
          </div>
        </div>
        <Pagination :info="episodes.info" model="episode" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import Filters from '../../components/commons/Filters'
import Pagination from '../../components/commons/Pagination'
import Loading from '../../components/commons/Loading'

export default {
  layout: 'without-navbar',
  components: {
    Filters,
    Pagination,
    Loading
  },
  computed: {
    ...mapGetters({
      episodes: 'episode/get',
      loading: 'episode/loading'
    })
  },
  async asyncData ({ store }) {
    await store.dispatch('episode/get')
  }
}
</script>

<style>
.bg-main {
  background-color: #eeeeee;
  padding: 2rem 0;
}

.episodes {
  position: relative;
}
</style>
