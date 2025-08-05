<script lang="ts" setup>

</script>

<template>
    <header class="header">
        <NuxtLink class="header__link" to="/">Главная</NuxtLink>
        <NuxtLink class="header__link" to="/about">Обо мне</NuxtLink>
        <NuxtLink class="header__link" to="">Портфолио</NuxtLink>
        <NuxtLink class="header__link" to="">Контакты</NuxtLink>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        

        &__link {
            font-family: 'Rubik', sans-serif;
            font-size: 20px;
            font-weight: 500;
            color: #fff;
            opacity: 60%;
            text-decoration: none;
        }
    }
</style>
