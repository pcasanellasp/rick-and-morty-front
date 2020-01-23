<template>
  <div class="card shadow-md">
    <figure class="card-image">
      <!--  <img :src="character.image" :alt="character.name"> -->
      <img :alt="character.name" src="https://picsum.photos/seed/picsum/374/300">
    </figure>
    <header class="card-header">
      <h3 class="card-title">
        {{ character.name }}
      </h3>
      <p>
        <span class="tag is-link">{{ character.gender }}</span>
        <span class="tag is-dark">{{ character.species }}</span>
        <span :class="character.status === 'Dead' ? 'is-danger' : 'is-link'" class="tag is-success">{{ character.status }}</span>
      </p>
    </header>
    <div class="card-content">
      <p>Location: {{ character.location.name }}</p>
      <p>Origin: {{ character.origin.name }}</p>
    </div>
    <footer class="card-footer text-right">
      <nuxt-link :to="{ name: 'characters-id', params: { id: character.id }}" class="btn btn-primary btn-3d">
        View More
      </nuxt-link>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    'character': {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>
  .grid .column {
    padding: 0;
  }

  .card {
    height: 100%;
  }
</style>
