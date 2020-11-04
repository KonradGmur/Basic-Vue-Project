<template>
  <main class="login">
    <h1>Zaloguj się aby kontynuować</h1>
    <form>
      <FormInput
        name="username"
        :value="username"
        v-model="username"
        placeholder="Nazwa uzytkownika"
      />
    </form>
  </main>
</template>

<script>
export default {
  computet: {
    title() {
      switch (this.mode) {
        case "login":
          return "Login";
        case "signup":
          return "Zaloz nowe konto";
      }
    },
  },
  data() {
    return {
      mode: "login",
      username: "",
      password: "",
      password2: "",
      email: "",
    };
  },
};
</script>