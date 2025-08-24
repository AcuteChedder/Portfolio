<script lang="ts" setup>
const { $gsap, $SplitText } = useNuxtApp();
const skills = [
  "Vue.js",
  "Nuxt",
  "Node.js",
  "Tailwind",
  "TypeScript",
  "Express",
  "MongoDB",
];

const animation = () => {
  $gsap.fromTo(
    ".profile__img",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: "power2.out" }
  );

  $gsap.fromTo(
    ".profile__name",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out" }
  );

  $gsap.fromTo(
    ".profile__doer",
    { opacity: 0, y: 0 },
    { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
  );

  let split = new $SplitText(".profile__desc", {
    type: "lines",
  });
  $gsap.set(split.lines, { opacity: 0, yPercent: 100 });
  $gsap.to(split.lines, {
    opacity: 1,
    yPercent: 0,
    duration: 2,
    stagger: 0.2,
    delay: 0.8,
    ease: "expo.out",
  });

  $gsap.from(".skills__title", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: 2,
    ease: "power3.out",
  });

  $gsap.from(".skills__cards-card", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.15,
    delay: 2.5,
    ease: "power3.out",
  });
};

onMounted(() => {
  animation();
});
</script>

<template>
  <main class="main">
    <div class="main__content">
      <div class="profile">
        <img src="/avatar.png" alt="" class="profile__img" />
        <h1 class="profile__name">Борис Чудинов</h1>
        <p class="profile__doer">Fullstack-разработчик</p>
        <p class="profile__desc">
          Я — фуллстек-разработчик с интересом к созданию современных,
          продуманных и удобных интерфейсов. Имею 2-х летний опыт веб-разработки и
          продолжаю активно развиваться в этом направлении, а также постоянно
          прокачиваю свои навыки как во Frontend, так и в Backend.
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

    @media (max-width: 500px) {
      width: 50vw;
      height: 50vw;
    }
  }

  &__name {
    font-size: 40px;
    color: #fff;
    margin-top: 15px;

    @media (max-width: 500px) {
      font-size: 8vw;
    }
  }

  &__doer {
    font-size: 16px;
    color: #ff9d00;
    font-weight: 600;

    @media (max-width: 500px) {
      font-size: 3vw;
    }
  }

  &__desc {
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    margin-top: 20px;

    @media (max-width: 500px) {
      font-size: 5vw;
    }
  }
}

.skills {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 24px;
    color: #fff;
    margin-top: 30px;
  }

  &__cards {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 5px;

    &-card {
      padding: 12px 24px;
      background-color: #ff9d00;
      font-size: 15px;
      font-weight: 500;
      border-radius: 20px;
      margin-top: 20px;
    }
  }
}
</style>
