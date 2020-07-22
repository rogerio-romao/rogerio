<template>
  <div>
    <h1 class="text-4xl text-right text-gray-300 mb-2">
      Rogerio's Portfolio
    </h1>
    <div class="mb-2 text-gray-300 font-semibold">
      <router-link to="/">
        <a
          class="mr-4 nav-links pt-2 text-lg hover:text-red-800"
          href="/featured"
          >Featured Projects</a
        >
      </router-link>
      <router-link to="/projects">
        <a
          class="mr-4 nav-links pt-2 text-gray-300 text-lg  hover:text-red-800"
          href="/"
          >Portfolio</a
        >
      </router-link>
      <router-link to="/about">
        <a
          class="mr-4 nav-links pt-2 text-gray-300  text-lg hover:text-red-800"
          href="/about"
          >About Me</a
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFolderOpen);
Vue.component("font-awesome-icon", FontAwesomeIcon);
export default {
  name: "TopNav"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
h1 {
  font-family: "Oswald", sans-serif !important;
  letter-spacing: 1px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}
.nav-links {
  transition: all ease-in-out 0.15s;
}
.nav-links:hover {
  border-top: 1px solid#3067c5;
}
</style>
