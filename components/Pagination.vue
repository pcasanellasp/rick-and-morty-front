<template>
  <div>
    <a @click.prevent="setPage(-1)" v-if="info.prev" class="button is-primary" href="#">Prev</a>
    <a @click.prevent="setPage(1)" v-if="info.next" class="button is-primary" href="#">Next</a>
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
