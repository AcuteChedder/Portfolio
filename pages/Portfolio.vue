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
            <p class="cards-card-stack" v-for="tech in project.stack">
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
  flex-wrap: wrap;

  &__card {
    position: relative;
    width: 340px;
    height: 200px;
    background-size: cover;
    background-position: center;

    &-content {
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
  .cards__card-stacks,
  .cards-card-stack {
    background: none;
  }
}
</style>
