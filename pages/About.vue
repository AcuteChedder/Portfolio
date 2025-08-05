<script lang="ts" setup>
const skills = ['Vue.js', 'Nuxt', 'Node.js', 'Express', 'TailwindCSS', 'SCSS', 'MongoDB']
</script>

<template>
    <main class="main">

      <div class="profile">
        <img src="" alt="" class="profile__img">
        <h1 class="profile__name">Борис Чудинов</h1>
        <p class="profile__doer">Fullstack-разработчик</p>
        <p class="profile__desc">Привет! Меня зовут Борис. Я — фуллстек-разработчик с интересом к созданию современных, продуманных и удобных интерфейсов. Активно развиваюсь в направлении веб-разработки и постоянно прокачиваю свои навыки как во Frontend, так и в Backend</p>
      </div>  

       <div class="skills">
        <h1 class="skills__title">Мои навыки</h1>
        <div class="cards">
            <p class="cards__card"></p>
        </div>
       </div>
    </main>
</template>

<style lang="scss" scoped>
    
</style>
