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
  methods: {
    async operation() {
      await this[this.mode]();
    },
    async login() {},
    async singup() {},
  },
  computet: {
    title() {
      switch (this.mode) {
        case "login":
          return "Login";
        case "signup":
          return "Zaloz nowe konto";
      }
    },
    retypePasswordError() {
      return this.password2 && this.password !== this.password2;
    },
    signupValid() {
      return this.password2 && this.email && !this.retypePasswordError;
    },
    valud() {
      return (
        this.username &&
        this.password &&
        this.mode !== ("signup" || this.signupValid)
      );
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