<template>
  <div class="pagination">
    <a @click.prevent="setPage(-1)" v-if="info.prev" class="btn btn-secondary" href="#">Prev</a>
    <a @click.prevent="setPage(1)" v-if="info.next" class="btn btn-secondary" href="#">Next</a>
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
    },
    'model': {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  computed: {
    ...mapGetters({
      actualPage: `pagination/page`
    }),
    page () {
      return this.actualPage
    }
  },
  methods: {
    async setPage (increment) {
      let page = this.page
      page += increment
      await this.$store.dispatch(`pagination/setPage`, page)
      await this.$store.dispatch(`${this.model}/get`, page)
    }
  }
}
</script>

<style>
.pagination {
  padding: 1rem 0;
}
</style>
