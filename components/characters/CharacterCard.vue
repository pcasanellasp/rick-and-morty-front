<template>
  <div class="card shadow-md">
    <figure class="card-image">
      <!-- <img :src="character.image" :alt="character.name"> -->
      <img :alt="character.name" src="https://picsum.photos/seed/picsum/374/300">
    </figure>
    <div class="card-header">
      <p class="lead">
        {{ character.name }}
      </p>
      <p>
        <span class="tag is-link">{{ character.gender }}</span>
        <span class="tag is-dark">{{ character.species }}</span>
        <span :class="character.status === 'Dead' ? 'is-danger' : 'is-link'" class="tag is-success">{{ character.status }}</span>
      </p>
    </div>
    <div class="card-content">
      <p>Location: {{ character.location.name }}</p>
      <p>Origin: {{ character.origin.name }}</p>
    </div>
    <footer class="card-footer text-right">
      <nuxt-link :to="{ name: 'characters-id', params: { id: character.id }}" class="card-footer-item is-primary">
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
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card .card-image, .card .card-image img{
    width: 100%;
    margin: 0;
  }

  .card .card-content, .card-footer, .card-header {
    padding: 1rem;
  }

  .card-footer {
    margin-top: auto;
  }
</style>
