<template>
  <div>
    <h5>You have Successfully logged out</h5>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  created() {
    localStorage.removeItem("token");
  }
};
</script>

<style></style>
