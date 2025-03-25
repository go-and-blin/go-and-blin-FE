<script setup>
import NavBar from "@/components/header/NavBar.vue";
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <div :id="route.name === 'write' ? 'app-full-container' : 'app-container'">
    <NavBar id="nav" v-if="route.name !== 'write'"></NavBar>
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

#app-full-container {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>

