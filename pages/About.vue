<script lang="ts" setup>
const skills = [
  "Vue.js",
  "Nuxt",
  "Node.js",
  "Tailwind",
  "TypeScript",
  "Express",
  "MongoDB",
];
</script>

<template>
  <main class="main">
    <div class="main__content">
      <div class="profile">
        <img src="/avatar.png" alt="" class="profile__img" />
        <h1 class="profile__name">Борис Чудинов</h1>
        <p class="profile__doer">Fullstack-разработчик</p>
        <p class="profile__desc">
          Привет! Меня зовут Борис. Я — фуллстек-разработчик с интересом к
          созданию современных, продуманных и удобных интерфейсов. Активно
          развиваюсь в направлении веб-разработки и постоянно прокачиваю свои
          навыки как во Frontend, так и в Backend
        </p>
      </div>

      <div class="skills">
        <h1 class="skills__title">Мои навыки</h1>
        <div class="skills__cards">
          <p class="skills__cards-card" v-for="skill in skills">{{ skill }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  font-family: "Rubik", sans-serif;
  margin-top: 80px;

  &__content {
    display: flex;
    flex-direction: column;
  }
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__img {
    width: 300px;
    height: 300px;
  }

  &__name {
    font-size: 40px;
    color: #fff;
    margin-top: 15px;
  }

  &__doer {
    font-size: 16px;
    color: #FF9D00;
    font-weight: 600;
  }

  &__desc {
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    margin-top: 20px;
  }
}

.skills {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 24px;
    color: #fff;
    margin-top: 60px;
  }

  &__cards {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;

    &-card {
      padding: 12px 24px;
      background-color: #FF9D00;
      font-size: 15px;
      font-weight: 500;
      border-radius: 20px;
      margin-top: 20px;
      
    }
  }
}
</style>
