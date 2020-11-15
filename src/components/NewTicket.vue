<template>
  <div class="new-ticket">
    <h1>Nowe zgłoszenie</h1>
    <SmartForm title="Nowe zgłoszenie" :oparation="operation" :valid="valid">
      <FormInput
        name="title"
        v-model="title"
        placeholder="Krótki opis (max 100 znaków)"
        maxlenght="100"
        required
      />
      <FormInput
        type="textarea"
        name="description"
        v-model="description"
        placeholder="Opisz swój problem"
        required
        row="4"
      />
      <template slot="actions">
        <router-link tag="button" :to="{ name: 'tickets' }" class="secondary"
          >Powrót ></router-link
        >
        <button type="submit" :disabled="!valid">Wyślij zgłoszenie</button>
      </template>
    </SmartForm>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    valid() {
      return !!this.title && !!this.description;
    },
  },
  methods: {
    async operation() {
      const result = await this.$fetch("tickets/new", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          description: this.description,
        }),
      });
      this.title = this.description = "";
    },
  },
};
</script>
