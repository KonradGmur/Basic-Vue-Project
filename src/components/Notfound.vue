<template>
  <main class="not-found">
    <h1>Nie znaleziono strony</h1>
    <p class="more-info">
      Przepraszamy, ale nie mogliśmy znaleźć strony ,której szukasz. Jeśli
      chcesz naciśnij poniższy przycisk aby wrócić do strony głównej.
    </p>
    <div class="actions">
      <router-link tag="button" :to="{ name: 'home' }"
        >Powrót do strony głównej</router-link
      >
    </div>
  </main>
</template>

<style lang="stylus" scoped>
.more-info{
    text-align:center
}
</style>
