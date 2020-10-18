<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img class="img" src="../style/assets/logo.svg" alt="logo" />
        <div>Centrum wsparcia firmy Gmur Corporation</div>
      </div>
    </header>

    <router-view />
  </div>
</template>

<style lang="stylus">
@import '../style/style/main';
</style>

<style lang="stylus" scoped>
.header {
  .img {
    width: 64px;
    height: 64px;
  }
}
</style>