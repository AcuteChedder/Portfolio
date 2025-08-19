<script setup>
const { $gsap, $SplitText } = useNuxtApp();

const textAnimation = () => {
  let split = new $SplitText(".main__text", {
    type: "lines, words",
  });
  $gsap.set(split.lines, { y: 20, opacity: 0 });
  $gsap.to(split.lines, {
    y: 0,
    opacity: 1,
    stagger: 1.6,
    duration: 1.5,
    ease: "power3.out",
  });
  $gsap.to(".myname", {
    duration: 1.5,
    scrambleText: {
      text: "Борис",
      chars: "QWERTYUIOP331DFDFASDFGK3761833194913",
      revealDelay: 0.5,
    },
    ease: "power2.inOut",
  });
};

const btnAnimation = () => {
  $gsap.fromTo(".main__buttons", 
    { opacity: 0, y: 20 }, 
    { opacity: 1, y: 0, duration: 1, delay: 2.2, ease: "power2.out" }
  )
};

onMounted(() => {
  textAnimation();
  btnAnimation()
});
</script>

<template>
  <main class="main">
    <div class="main__content">
      <h1 class="main__text">
        Привет! Я <span class="myname">Борис</span><br />Fullstack-разработчик.
      </h1>
      <div class="main__buttons">
        <NuxtLink class="main__buttons-btn" to="/portfolio">Портфолио</NuxtLink>
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
      background-color: #ff9d00;
      border-radius: 20px;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.25s ease;
      text-decoration: none;
      color: #1a1a1a;

      &:hover {
        background: none;
        border: 2px solid #ff9d00;
        color: #fff;
      }
    }

    &-btn:nth-child(2) {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      padding: 10px 20px;
      border: 2px solid #ff9d00;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.25s ease;
      text-decoration: none;
      color: #fff;

      &:hover {
        box-shadow: inset 5em 0 0 0 #ff9d00,
        inset -5em 0 0 0 #ff9d00;
        border-color: #ff9d00;
        color: #1a1a1a;
      }
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
      color: #ff9d00;
    }
  }
}
</style>
