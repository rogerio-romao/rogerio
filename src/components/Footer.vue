<template>
  <div>
    <div
      class="w-1/2 text-center bg-gray-100 border-orange-300 border rounded-md p-4 mx-auto my-4"
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

export default {
  components: {
    FontAwesomeIcon
  }
};
</script>

<style></style>
