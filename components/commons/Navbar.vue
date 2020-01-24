<template>
  <nav class="navbar">
    <div class="container-extra vh-10">
      <div class="navbar-left">
        <a href="/" class="navbar-brand navbar-item">
          <img src="/images/logo.svg" alt="Logo Pau Casanellas" width="200" height="58">
        </a>
      </div>
      <div class="navbar-right navbar-menu desktop">
        <nuxt-link :to="{ name: 'characters' }" class="navbar-item">
          Characters
        </nuxt-link>
        <nuxt-link :to="{ name: 'locations' }" class="navbar-item">
          Locations
        </nuxt-link>
        <nuxt-link :to="{ name: 'episodes' }" class="navbar-item">
          Episodes
        </nuxt-link>
        <a class="navbar-item" href="https://rickandmortyapi.com/" target="_blank">
          API
        </a>
      </div>
      <div class="navbar-right mobile">
        <a @click.prevent="isNavbarDrawerActive = !isNavbarDrawerActive" href="#" class="navbar-trigger navbar-item">🍔</a>
      </div>
    </div>
    <div :class="isNavbarDrawerActive ? 'is-active' : ''" class="navbar-drawer text-right">
      <nuxt-link :to="{ name: 'characters' }" class="navbar-item">
        Characters
      </nuxt-link>
      <nuxt-link :to="{ name: 'locations' }" class="navbar-item">
        Locations
      </nuxt-link>
      <nuxt-link :to="{ name: 'episodes' }" class="navbar-item">
        Episodes
      </nuxt-link>
      <a class="navbar-item" href="https://rickandmortyapi.com/" target="_blank">
        API
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isNavbarDrawerActive: false
    }
  }
}
</script>

<style>
.navbar-brand.navbar-item {
  padding: 1rem 0;
}
</style>
