<template>
  <main class="faq">
    <h1>Najczęściej zadawane pytania</h1>
    <div class="error" v-if="hasRemoteErrors">Problem z wczytaniem pytań</div>

    <Loading v-if="remoteDataBusy" />

    <section class="list">
      <article v-for="question of questionList">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
import RemoteData from "../mixins/RemoteData";
export default {
  mixins: [
    RemoteData({
      questionList: "questions",
    }),
  ],
};
</script>