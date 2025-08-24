<script lang="ts" setup>
import { cards } from "~/data/cards";
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.fromTo(
    ".main__title",
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" }
  );

  $gsap.fromTo(
    ".cards",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1.5, delay: 0.2, ease: "power2.out" }
  );
});
</script>

<template>
  <main class="main">
    <h1 class="main__title">МОИ КОНТАКТЫ</h1>
    <div class="cards">
      <a :href="card.link" class="cards__card" v-for="card in cards">
        <img :src="card.image" alt="" class="cards__card-img" />
        <p class="cards__card-title">{{ card.title }}</p>
      </a>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: calc(50svh - 120px - 30px);
  font-family: "Rubik", sans-serif;

  @media (max-width: 500px) {
    margin-top: calc(25svh - 90px - 30px);
  }

  &__title {
    color: #fff;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;

  &__card {
    padding: 58px 68px;
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    width: 200px;
    height: 180px;
    text-decoration: none;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: all 1s;
    

    &:hover {
      border: 2px solid #ff9d00;
      scale: 1.1;
      box-shadow: 0px 0px 10px 0px #ff9d00;
    }

    &-img {
      background: none;
      width: 40px;
      height: 40px;
    }

    &-title {
      background: none;
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>
