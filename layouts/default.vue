<script setup></script>

<template>
  <div class="layout">
    <header>
      <Header />
    </header>

    <main>
      <slot />
    </main>

    <footer></footer>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #1a1a1a;
}

.layout {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  max-width: 1200px;
  margin-inline: auto;

  @media (max-width: 500px) {
    width: calc(100vw - 20px);
    margin: auto;
    margin-top: 20px;
  }
}

main {
  margin-bottom: 20px;
}
</style>
