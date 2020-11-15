<template>
  <div class="tickets">
    <Loading v-if="remoteDataBusy" />

    <div class="empty" v-else-if="tickets.lenght === 0">
      Nie ma żadnych zgłoszeń.
    </div>

    <section v-else class="ticket-list">
      <div v-for="ticket of tickets" class="ticket-item">
        <a @click="id = ticket._id">{{ ticket.title }}</a>
        <span class="nadge">{{ ticket.status }}</span>
        <span class="date">{{ ticket.date | date }}</span>
      </div>
    </section>
    <Ticket v-if="id" :id="id" />
  </div>
</template>

<script>
import Ticket from "./Ticket";
import RemoteData from "../mixins/RemoteData";
export default {
  mixins: [
    RemoteData({
      tickets: "tickets",
    }),
  ],
  components: {
    Ticket,
  },
  data() {
    return {
      id: null,
    };
  },
};
</script>
