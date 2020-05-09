<template>
  <div class="p-6 mx-auto bg-orange-200">
    <h1 class="text-4xl font-extrabold text-right text-gray-700 mb-3 underline">
      Rogerio's Portfolio
    </h1>
    <div class="mb-2 text-indigo-700 font-semibold">
      <a class="hover:text-indigo-500 mr-4 nav-links pt-1" href="/"
        >Kitchen Sink</a
      >
      <a class="hover:text-indigo-500 mr-4 nav-links pt-1" href="/featured"
        >Featured Projects</a
      >
      <a class="hover:text-indigo-500 mr-4 nav-links pt-1" href="/about"
        >About Me</a
      >
    </div>
    <div
      class="border border-orange-400 bg-orange-100 w-full h-full p-4 flex-col mx-auto"
    >
      <div class="w-full flex items-center mx-auto border-b pb-2">
        <h3 class="text-md font-semibold uppercase">Project Type:</h3>

        <span class="ml-3 align-text-bottom">{{ projType }}</span>
      </div>
      <div class="w-full flex mt-3 items-center border-b pb-2 flex-wrap">
        <h3 class="text-md font-semibold uppercase">Technologies used:</h3>
        <span
          class="ml-3 bg-green-500 hover:bg-blue-600 text-white px-2 rounded-full"
          v-for="technology in this.$store.state.projects[this.currentProject]
            .technologies"
          :key="technology.name"
          >{{ technology }}</span
        >
      </div>
      <div class="w-full flex mt-3 items-center border-b pb-2 flex-wrap">
        <h3 class="text-md font-semibold uppercase">Project name:</h3>
        <transition mode="out-in">
          <span
            :key="this.currentProject"
            class="text-2xl text-blue-500 bg-green-100 border p-2 rounded-lg shadow-sm align-middle font-extrabold tracking-wide ml-3"
            >{{ projName }}</span
          >
        </transition>
        <span class="ml-3">
          {{ projShortDesc }}
        </span>
      </div>
      <Projects @projectChange="changeProject($event)" />
      <div class="description mt-5">
        <h3 class="text-md font-semibold uppercase">Project Description</h3>
        <p class="mt-2">
          {{ projLongDesc }}
        </p>
      </div>
    </div>
    <div
      class="w-1/2 text-center border-orange-300 border rounded-md p-4 mx-auto my-4"
    >
      <a
        href="https://github.com/rogerio-romao"
        target="_blank"
        class="text-xl p-3 m-3 hover:text-orange-500"
      >
        GitHub
        <FontAwesomeIcon :icon="['fab', 'github-square']" />
      </a>
      <a
        href="https://codepen.io/rogerio-romao"
        target="_blank"
        class="text-xl p-3 m-3 hover:text-orange-500"
      >
        CodePen
        <FontAwesomeIcon :icon="['fab', 'codepen']" />
      </a>
    </div>
    <footer>
      <small>Coded by Rogerio Romao 2020 </small>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubSquare, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithubSquare, faCodepen);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import Projects from "@/components/Projects.vue";
export default {
  methods: {
    changeProject(value) {
      if (value > this.$store.state.projects.length - 1) value = 0;
      this.currentProject = value;
    }
  },
  components: {
    Projects,
    FontAwesomeIcon
  },
  data: function() {
    return {
      currentProject: 0
    };
  },
  computed: {
    projType() {
      return this.$store.state.projects[this.currentProject].type;
    },
    projName() {
      return this.$store.state.projects[this.currentProject].name;
    },
    projShortDesc() {
      return this.$store.state.projects[this.currentProject].shortDesc;
    },
    projLongDesc() {
      return this.$store.state.projects[this.currentProject].longDesc;
    }
  }
};
</script>

<style>
.nav-links:hover {
  border-top: 1px solid limegreen;
}
</style>
