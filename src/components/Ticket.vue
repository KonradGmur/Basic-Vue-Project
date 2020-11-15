<template>
  <div class="ticket">
    <h2>Zgłoszenie</h2>
    <Loading v-if="remoteDataBusy" />

    <div class="empty" v-else-if="!ticket">Zgłoszenie nie znalezione</div>

    <template v-else>
      <section class="infos">
        <div class="info">
          Utworzono <strong>{{ ticket.date | date }}</strong>
        </div>
        <div class="info">
          Autor: <strong>{{ ticket.user.unsername }}</strong>
        </div>
        <div class="info">
          Status: <span class="badge">{{ ticket.status }}</span>
        </div>
      </section>
      <section class="content">
        <h3>{{ ticket.title }}</h3>
        <p>{{ ticket.descripion }}</p>
      </section>
    </template>
  </div>
</template>

<script>
import RemoteData from "../mixins/RemoteData";
export default {
  mixins: [
    RemoteData({
      ticket(){
        return 'ticket/${this.id}'
      }
    }),
  ],
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
