<template>
  <div>
  <img style="height: 50px; margin-top: 100px;" src="../assets/only-logo-SO.png">
      <div class="container signup-form">
      <section class="the-form">

          <b-field label="Username">
              <b-input type="text"
                  v-model="username"
                  maxlength="30">
              </b-input>
          </b-field>

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
              <b-button @click="signUp" type="is-info" expanded>Sign Up</b-button>
          </div>
      </section>
      </div>
  </div>
</template>

<script>
export default {
  name: 'signup-form',
  data: function () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      this.$store.dispatch('signUp', { username: this.username, email: this.email, password: this.password })
    }
  }
}
</script>

<style>
.login {
  align-items: center;
}
.signup-form {
  height: 420px;
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
