<template>
  <header class="hero bg-primary">
    <div class="container-extra grid columns-2 no-gap align-center vh-50">
      <div class="column">
        <slot name="title" />
        <slot name="description" />
      </div>
      <div class="column text-right hero-image">
        <img src="/images/meeseeks.png" alt="Existence is Pain!!" width="385">
      </div>
    </div>
  </header>
</template>

<style scoped>
  .grid .hero-image {
    padding-bottom: 0;
    align-self: flex-end;
  }
</style>
