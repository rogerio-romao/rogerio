<template>
  <div>
    <h1 class="text-4xl text-right text-gray-300 mb-2">
      &lt; Rogerio's Portfolio / CV &gt;
    </h1>
    <div class="mb-2 text-gray-300 font-semibold">
      <router-link to="/">
        <a
          class="mr-4 nav-links pt-2 text-lg hover:text-red-800"
          href="/featured"
          :class="{ active: featured }"
          >Featured Projects</a
        >
      </router-link>
      <router-link to="/projects">
        <a
          class="mr-4 nav-links pt-2 text-gray-300 text-lg  hover:text-red-800"
          href="/"
          :class="{ active: portfolio }"
          >Portfolio</a
        >
      </router-link>
      <router-link to="/about">
        <a
          class="mr-4 nav-links pt-2 text-gray-300  text-lg hover:text-red-800"
          href="/about"
          :class="{ active: about }"
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
  name: "TopNav",
  props: {
    featured: {
      type: Boolean,
      default: false
    },
    portfolio: {
      type: Boolean,
      default: false
    },
    about: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
h1 {
  font-family: "Oswald", sans-serif !important;
  letter-spacing: 1px;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.65),
    -3px -3px 3px rgba(0, 0, 0, 0.65);
}
.nav-links {
  transition: all ease-in-out 0.15s;
}
.nav-links:hover {
  border-top: 1px solid#3067c5;
  text-decoration: none;
}
.active {
  border-top: 1px solid#3067c5;
}
</style>
