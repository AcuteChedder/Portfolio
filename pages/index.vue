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
body {
  overflow-y: hidden;
}

.main {
  display: flex;
  height: calc(100svh - 60px);
  justify-content: center;
  font-family: "Rubik", sans-serif;
  
  &__buttons {
    display: flex;
    gap: 62px;
    margin-top: 20px;
    text-transform: uppercase;

    &-btn:nth-child(1) {
      font-size: 20px;
      font-weight: 600;
      padding: 10px 20px;
      background-color: #FF9D00;
      border-radius: 20px;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.25s ease;

      &:hover {
        background: none;
        border: 2px solid #FF9D00;
        color: #fff;
        
      }
    }

    &-btn:nth-child(2) {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      padding: 10px 20px;
      border: 2px solid #FF9D00;
      border-radius: 20px;
      cursor: pointer;
    }
  }
  
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__text {
    font-family: "Rubik", sans-serif;
    color: #fff;
    font-size: 48px;
    text-align: center;

    span {
      color: #FF9D00;
    }
  }
}
</style>
