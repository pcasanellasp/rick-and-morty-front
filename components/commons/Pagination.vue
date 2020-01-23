<template>
  <div>
    <a @click.prevent="setPage(-1)" v-if="info.prev" class="btn btn-secondary btn-3d" href="#">Prev</a>
    <a @click.prevent="setPage(1)" v-if="info.next" class="btn btn-secondary btn-3d" href="#">Next</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    'info': {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters({
      actualPage: 'character/page'
    }),
    page () {
      return this.actualPage
    }
  },
  methods: {
    async setPage (increment) {
      let page = this.page
      page += increment
      await this.$store.dispatch('character/setPage', page)
      await this.$store.dispatch('character/get')
    }
  }
}
</script>
