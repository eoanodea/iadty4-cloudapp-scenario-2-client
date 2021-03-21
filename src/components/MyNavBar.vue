<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <b-navbar-brand
      ><router-link class="nav-link" to="/"
        >FestivalCloud</router-link
      ></b-navbar-brand
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/festivals">Festivals</router-link>
        <router-link class="nav-link" to="/stages">Stages</router-link>
        <router-link class="nav-link" to="/shows">Shows</router-link>
        <router-link class="nav-link" to="/performers">Performers</router-link>

        <router-link v-if="loggedIn" class="nav-link" to="/logout"
          >Logout</router-link
        >

        <span v-else>
          <router-link class="nav-link" to="/login">Login</router-link>

          <router-link class="nav-link" to="/register">Register</router-link>
        </span>
      </b-navbar-nav>
    </b-collapse>
  </nav>
</template>

<script>
export default {
  name: "MyNavBar",
  data() {
    return {
      loggedIn: false
    };
  },
  watch: {
    $route(to, from, options) {
      if (localStorage.getItem("token")) {
        this.loggedIn = true;
      } else this.loggedIn = false;
    }
  }
};
</script>

<style></style>
