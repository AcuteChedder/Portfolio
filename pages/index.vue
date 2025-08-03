<script setup></script>

<template>
  <main class="main">
    <div class="main__content">
      <h1 class="main__text">
        Привет! Я <span>Борис</span><br />Fullstack-разработчик.
      </h1>
      <div class="main__buttons">
        <NuxtLink class="main__buttons-btn" to="">Портфолио</NuxtLink>
        <NuxtLink class="main__buttons-btn" to="">Связаться</NuxtLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  
  
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
