<template>
  <main>
    <div class="bg-main">
      <div class="container-extra">
        <Filters />
        <div class="characters grid columns-4">
          <Loading v-if="loading" />
          <div v-for="(location, index) in locations.results" :key="index" class="column">
            {{ location.name }}
            <nuxt-link :to="{ name: 'locations-id', params: { id: location.id }}" class="">
              View More
            </nuxt-link>
          </div>
        </div>
        <Pagination :info="locations.info" model="location" />
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
      locations: 'location/get',
      loading: 'location/loading'
    })
  },
  async asyncData ({ store }) {
    await store.dispatch('location/get')
  }
}
</script>

<style>
.bg-main {
  background-color: #eeeeee;
  padding: 2rem 0;
}

.locations {
  position: relative;
}
</style>
