<template>
  <div style="margin-left: 150px; margin-right: 150px;">
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        <b-dropdown aria-role="list" style="margin-top: 20px;">
          <button class="button is-light" slot="trigger">
              <i class="fas fa-bars"></i>
          </button>

          <b-dropdown-item aria-role="listitem" @click="$router.push('/')">Home</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">PUBLIC</b-dropdown-item>
          <b-dropdown-item aria-role="listitem" @click="$router.push('/questions')"><span><i  class="fas fa-globe-americas"></i></span> Stack Overflow</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">Tag</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">Users</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">Jobs</b-dropdown-item>

        </b-dropdown>
              <img @click="$router.push('/')" style="height: 50px; width: 200px; margin-top: 10px; margin-left: 20px;" src="../assets/stackoverflow-logo.png" width="112" height="28">
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a v-if="!$store.state.isLogin" style="margin-top: 15px;" @click="$router.push('/login')" class="button is-white has-text-info">
            Log in
          </a>
          <a v-else style="margin-top: 15px;" @click="$router.push('/login')" class="button is-white has-text-info">
            Log out
          </a>
          <a v-if="!$store.state.isLogin" style="margin-top: 15px;" @click="$router.push('/signup')" class="button is-primary is-info">
            <strong>Sign up</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
tag {
        cursor: pointer;
    }
</style>
