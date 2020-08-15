<template>
  <div class="nav px-4">
    <div>
      <img
        v-if="theme === 'dark'"
        class="theme-icon"
        width="24"
        height="24"
        src="../assets/light.svg"
        alt="light mode"
        title="Switch to light theme"
        @click="changeTheme"
      />
      <img
        v-else
        class="theme-icon"
        width="24"
        height="24"
        src="../assets/dark.svg"
        alt="dark mode"
        title="Switch to dark theme"
        @click="changeTheme"
      />
    </div>
    <h1 class="text-4xl text-right mb-2">
      &lt; Rogerio's Portfolio / CV &gt;
    </h1>
    <div class="mb-2 font-semibold">
      <router-link to="/">
        <a
          @click="page = 'featured'"
          class="mr-4 nav-links pt-2 text-lg"
          href="/featured"
          :class="{ active: page === 'featured' }"
          >Featured Projects</a
        >
      </router-link>
      <router-link to="/projects">
        <a
          @click="page = 'portfolio'"
          class="mr-4 nav-links pt-2 text-lg"
          href="/"
          :class="{ active: page === 'portfolio' }"
          >Portfolio</a
        >
      </router-link>
      <router-link to="/about">
        <a
          @click="page = 'about'"
          class="mr-4 nav-links bg-b pt-2 text-lg"
          href="/about"
          :class="{ active: page === 'about' }"
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
  data() {
    return {
      page: "featured",
      theme: "dark"
    };
  },
  methods: {
    changeTheme() {
      if (this.theme === "dark") {
        this.theme = "light";
        document.documentElement.style.setProperty("--main-bg", "#ccc");
        document.documentElement.style.setProperty("--secondary-bg", "#fff");
        document.documentElement.style.setProperty("--font-color", "#aaa");
        document.documentElement.style.setProperty("--main-text", "#444");
        document.documentElement.style.setProperty("--links-hover", "#3182ce");
        document.documentElement.style.setProperty("--links", "#2c5282");
        document.documentElement.style.setProperty("--font-title", "#9b2c2c");
      } else {
        this.theme = "dark";
        document.documentElement.style.setProperty("--main-bg", "#1a202c");
        document.documentElement.style.setProperty("--secondary-bg", "#000000");
        document.documentElement.style.setProperty("--font-color", "#e2e8f0");
        document.documentElement.style.setProperty("--main-text", "#edf2f7");
        document.documentElement.style.setProperty("--links-hover", "#2c5282");
        document.documentElement.style.setProperty("--links", "#a0aec0");
        document.documentElement.style.setProperty("--font-title", "#e2e8f0");
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
h1 {
  font-family: "Oswald", sans-serif !important;
  letter-spacing: 1px;
  color: var(--font-title);
}
.nav {
  margin: 0.5em 0.5em 0 0.5em;
}
.nav-links {
  transition: all ease-in-out 0.15s;
  color: var(--font-color);
}
.nav-links:hover {
  border-top: 1px solid#3067c5;
  color: var(--font-hover);
  text-decoration: none;
}
.active {
  border-top: 1px solid#3067c5;
}
a:hover {
  text-decoration: none;
}
.theme-icon {
  opacity: 0.66;
  cursor: pointer;
  transition: all 0.25s;
}
.theme-icon:hover {
  opacity: 1;
}
</style>
