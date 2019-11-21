<template>
  <div>
    <img style="height: 50px; margin-top: 100px;" src="../assets/only-logo-SO.png">
    <div class="container login-form">
    <section class="the-form">
        <b-field label="Email">
            <b-input type="email"
                v-model="email"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
            v-model="password"
                password-reveal>
            </b-input>
        </b-field>

        <div class="buttons">
            <b-button @click="login" type="is-info" expanded>Login</b-button>
        </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-form',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
    }
  }
}
</script>

<style>
.login {
  align-items: center;
}
.login-form {
  height: 300px;
  width: 300px;
  background-color: white;
  text-align: left;
  box-shadow: -1px 2px 11px -4px rgba(0,0,0,0.75);
}
.the-form {
  padding: 25px 30px;
  margin-top: 15px;
}
</style>
