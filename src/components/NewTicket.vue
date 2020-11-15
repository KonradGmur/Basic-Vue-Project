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
      return !!this.title && !!title.description;
    },
  },
  methods: {
    async operation() {},
  },
};
</script>
