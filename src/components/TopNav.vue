<template>
  <div>
    <h1 class="text-3xl text-center text-gray-700 mb-2">
      Rogerio's Portfolio
      <FontAwesomeIcon :icon="['fa', 'folder-open']" />
    </h1>
    <div class="mb-2 text-blue-700 font-semibold">
      <router-link to="/">
        <a class="mr-4 nav-links pt-1 hover:text-gray-800" href="/featured"
          >Featured Projects</a
        >
      </router-link>
      <router-link to="/projects">
        <a class="mr-4 nav-links pt-1 hover:text-gray-800" href="/"
          >Portfolio</a
        >
      </router-link>
      <router-link to="/about">
        <a class="mr-4 nav-links pt-1 hover:text-gray-800" href="/about"
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
@import url("https://fonts.googleapis.com/css2?family=Francois+One&display=swap");
h1 {
  font-family: "Francois One", sans-serif;
  letter-spacing: 1px;
}
.nav-links {
  transition: all ease-in-out 0.15s;
}
.nav-links:hover {
  border-top: 1px solid#2f6eae;
}
</style>
