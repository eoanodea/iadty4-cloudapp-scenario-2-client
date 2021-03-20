<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <b-navbar-brand href="/">FestivalCloud</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/festivals">Festivals</router-link>
        <router-link class="nav-link" to="/stages">Stages</router-link>
        <router-link class="nav-link" to="/shows">Shows</router-link>
        <router-link class="nav-link" to="/performers">Performers</router-link>
      </b-navbar-nav>
    </b-collapse>
  </nav>
</template>

<script>
export default {
  name: "MyNavBar"
};
</script>

<style></style>
