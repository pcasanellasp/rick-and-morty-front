<template>
  <div class="container-extra">
    {{ episode.name }}
    <nuxt-link :to="{ name: 'episodes' }">
      Back to episodes ->
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      episode: 'episode/show'
    })
  },
  async asyncData ({ store, params }) {
    await store.dispatch('episode/show', params.id)
  }
}
</script>
