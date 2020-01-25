<template>
  <div class="container-extra">
    {{ character }}
    <nuxt-link :to="{ name: 'characters' }">
      Back to characters ->
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      character: 'character/show'
    })
  },
  async asyncData ({ store, params }) {
    await store.dispatch('character/show', params.id)
  }
}
</script>
