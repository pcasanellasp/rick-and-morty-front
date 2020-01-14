<template>
  <div>
    <form @submit.prevent="filterData">
      <input v-model="filters.name" type="text">
      <button type="submit">
        Filtrar
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      actualFilters: 'character/filters'
    }),
    filters () {
      return {
        ...this.actualFilters
      }
    }
  },
  methods: {
    async filterData () {
      await this.$store.dispatch('character/setFilters', this.filters)
      await this.$store.dispatch('character/setPage', 1)
      await this.$store.dispatch('character/get')
    }
  }
}
</script>
