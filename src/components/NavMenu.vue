<template>
    <nav class="menu">
        <router-link :to="{name:'home'}" exact>Strona Główna</router-link>,
        <router-link :to="{name:'faq'} ">FAQ</router-link>,
        <router-link :to ="{name: 'login'}">Login</router-link>
    <nav>
</template>

<style lang="stylus" scoped>
@import '../style/imports';

.router-link-active {
  border-bottom-color: $primary-color;
}
</style>