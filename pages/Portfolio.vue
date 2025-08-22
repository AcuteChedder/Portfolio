<script lang="ts" setup>
import { projects } from "~/data/projects";
</script>

<template>
  <main class="main">
    <h1 class="main__title">Мои работы</h1>

    <div class="cards">
      <div
        class="cards__card"
        v-for="project in projects"
        :key="project.id"
        :style="{ backgroundImage: `url(${project.image})` }"
      >
        <div class="cards__card-content">
          <div class="cards__card-text">
            <h2 class="cards__card-title">{{ project.title }}</h2>
            <p class="cards__card-desc">{{ project.description }}</p>
          </div>
          <div class="cards__card-stacks">
            <p class="cards__card-stack" v-for="tech in project.stack">
              {{ tech }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  margin-top: 50px;
  font-family: "Rubik", sans-serif;

  &__title {
    text-align: center;
    color: #fff;
  }
}

.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 100px;
  gap: 30px;

  &__card {
    position: relative;
    width: 380px;
    height: 220px;
    background-size: cover;
    background-position: center;

    &-stacks {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      gap: 5px;
      max-width: 140px;
    }

    &-stack {
      font-size: 10px;
      font-weight: 600;
      padding: 2px 6px;
      background-color: #FF9D00;
      color: #1A1A1A;
      border-radius: 15px;
    }

    &-text {
      color: #fff;
    }

    &-title {
      font-size: 18px;
      font-weight: 600;
    }

    &-desc {
      margin-top: 2px;
      font-size: 11px;
      max-width: 210px;
    }

    &-content {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      padding: 10px;
      background: none;
    }
  }

  .cards__card-text,
  .cards__card-title,
  .cards__card-desc,
  .cards__card-stacks {
    background: none;
  }
}
</style>
