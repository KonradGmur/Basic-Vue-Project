<template>
  <main class="faq">
    <h1>Najczęściej zadawane pytania</h1>
    <div class="error" v-if="error">Problem z wczytaniem pytań</div>
    <section class="list">
      <article v-for="question of questions">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
      error: null,
    };
  },
};
</script>