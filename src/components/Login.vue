<template>
  <main class="login">
    <h1>Zaloguj się aby kontynuować</h1>
    <form>
      <FormInput
        name="username"
        :value="username"
        placeholder="Nazwa uzytkownika"
      />
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
};
</script>