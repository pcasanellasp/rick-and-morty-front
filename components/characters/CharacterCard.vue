<template>
  <div class="card shadow-md">
    <figure class="card-image">
      <img :src="character.image" :alt="character.name">
      <!-- <img :alt="character.name" src="https://picsum.photos/seed/picsum/374/300"> -->
    </figure>
    <header class="card-header">
      <h3 class="card-title">
        {{ character.name }}
      </h3>
      <p>
        <span class="badge badge-primary">{{ character.gender }}</span>
        <span class="badge badge-purple">{{ character.species }}</span>
        <span :class="character.status === 'Dead' ? 'badge-black' : 'badge-green'" class="badge">{{ character.status }}</span>
      </p>
    </header>
    <div class="card-body content">
      <p>Location: <br><b>{{ character.location.name }}</b></p>
      <p>Origin: <br><b>{{ character.origin.name }}</b></p>
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

  .card-body p {
    margin-bottom: 1rem;
  }

</style>
