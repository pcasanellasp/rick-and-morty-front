<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/images/logo.svg" width="200" height="56">
        </a>
        <a
          @click.prevent="isNavbarOpen = !isNavbarOpen"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" :class="isNavbarOpen ? 'is-active' : ''" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link :to="{ name: 'characters' }" class="navbar-item">
            Characters
          </nuxt-link>
          <a class="navbar-item" href="https://rickandmortyapi.com/" target="_blank">
            API
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isNavbarOpen: false
    }
  }
}
</script>

<style>
.navbar-item img {
  max-height: none;
}
</style>
