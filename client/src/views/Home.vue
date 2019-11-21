<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="bg">
      <img src="../assets/background.png" style="width: 60%;">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Login from './'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
.bg {
  height: 100vh;
  background-repeat: no-repeat;
  background-color: #F8CE0E;

}
</style>
