<template>
  <div class="container-extra">
    {{ location }}
    <nuxt-link :to="{ name: 'locations' }">
      Back to locations ->
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      location: 'location/show'
    })
  },
  async asyncData ({ store, params }) {
    await store.dispatch('location/show', params.id)
  }
}
</script>
