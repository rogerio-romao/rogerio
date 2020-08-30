<template>
  <div>
    <div
      class="md:w-1/3 w-1/2 text-center bg-gray-300 border-blue-300 border rounded-md sm:p-2 p-1 mx-auto my-4"
    >
      <a
        href="https://github.com/rogerio-romao"
        target="_blank"
        class=" text-base sm:text-lg md:text-xl m-1 md:m-2 hover:text-blue-500"
      >
        GitHub
        <FontAwesomeIcon :icon="['fab', 'github-square']" />
      </a>
      <a
        href="https://codepen.io/rogerio-romao"
        target="_blank"
        class=" text-base sm:text-lg md:text-xl m-1 md:m-2 hover:text-blue-500"
      >
        CodePen
        <FontAwesomeIcon :icon="['fab', 'codepen']" />
      </a>
    </div>
    <footer>
      <small class="text-red-800 ml-6 mb-4">Coded by Rogerio Romao 2020 </small>
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

export default {
  components: {
    FontAwesomeIcon
  }
};
</script>

<style>
a {
  display: inline-block;
}
</style>
