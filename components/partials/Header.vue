<template>
  <header class="hero bg-primary">
    <div class="container-extra grid columns-2 align-center vh-50">
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

  .hero {
    padding-top: 1rem;
    background: linear-gradient(149deg, rgba(85, 85, 85, 0.05) 0%, rgba(85, 85, 85, 0.05) 25%,rgba(11, 11, 11, 0.05) 25%, rgba(11, 11, 11, 0.05) 50%,rgba(182, 182, 182, 0.05) 50%, rgba(182, 182, 182, 0.05) 75%,rgba(28, 28, 28, 0.05) 75%, rgba(28, 28, 28, 0.05) 100%),linear-gradient(232deg, rgba(145, 145, 145, 0.05) 0%, rgba(145, 145, 145, 0.05) 25%,rgba(165, 165, 165, 0.05) 25%, rgba(165, 165, 165, 0.05) 50%,rgba(84, 84, 84, 0.05) 50%, rgba(84, 84, 84, 0.05) 75%,rgba(131, 131, 131, 0.05) 75%, rgba(131, 131, 131, 0.05) 100%),linear-gradient(321deg, rgba(254, 254, 254, 0.05) 0%, rgba(254, 254, 254, 0.05) 25%,rgba(249, 249, 249, 0.05) 25%, rgba(249, 249, 249, 0.05) 50%,rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 75%,rgba(104, 104, 104, 0.05) 75%, rgba(104, 104, 104, 0.05) 100%),linear-gradient(90deg, rgb(21, 8, 116),rgb(111, 197, 250))
  }

  .grid .hero-image {
    padding-bottom: 0;
    align-self: flex-end;
  }
</style>
