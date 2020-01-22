<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="character.image" :alt="character.name">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">
            {{ character.name }}
          </p>
          <p class="subtitle is-6">
            <span class="tag is-link">{{ character.gender }}</span>
            <span class="tag is-dark">{{ character.species }}</span>
            <span :class="character.status === 'Dead' ? 'is-danger' : 'is-link'" class="tag is-success">{{ character.status }}</span>
          </p>
        </div>
      </div>
      <div class="content">
        <p>Location: {{ character.location.name }}</p>
        <p>Origin: {{ character.origin.name }}</p>
      </div>
    </div>
    <footer class="card-footer">
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
  .card {
    margin-bottom: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .card .card-footer {
    margin-top: auto;
  }
  .card img{
    width: 100%;
  }
</style>
