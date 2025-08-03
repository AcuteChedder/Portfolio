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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  max-width: 1140px;
  margin-inline: auto;   
}
</style>
