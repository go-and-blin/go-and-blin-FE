<script setup>
import NavBar from "@/components/header/NavBar.vue";
</script>

<template>
  <div id="app-container">
    <NavBar id="nav"></NavBar>
    <router-view id="router"></router-view>
  </div>
</template>


<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70vw;
  margin: 0 auto;
}

#nav {
  flex: 0 0 10%;
}

#router {
  flex: 1;
  width: 100%;
  margin: 0 auto;
}
</style>

