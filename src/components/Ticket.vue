<template>
  <div class="tickets">
    <Loading v-if="remoteDataBusy" />

    <div class="empty" v-else-if="tickets.lenght === 0">
      Nie ma żadnych zgłoszeń.
    </div>

    <section v-else class="ticket-list">
      <div v-for="ticket of tickets" class="ticket-item">
        <span>{{ ticket.title }}</span>
        <span class="nadge">{{ ticket.status }}</span>
        <span class="date">{{ ticket.date | date }}</span>
      </div>
    </section>
  </div>
</template>

<script>
import RemoteData from "../mixins/RemoteData";
export default {
  mixins: [
    RemoteData({
      tickets: "tickets",
    }),
  ],
};
</script>
