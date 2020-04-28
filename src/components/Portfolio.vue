<template>
  <div class="p-6 mx-auto">
    <h1 class="text-xl text-center">Rogerio's Portfolio</h1>
    <div class="border w-full h-full p-4 flex-col mx-auto">
      <div class="w-full flex items-center mx-auto">
        <h3 class="text-lg font-medium">Project Type:</h3>
        <span class="ml-3 align-text-bottom">{{
          projects[currentProject].type
        }}</span>
      </div>
      <div class="w-full flex mt-3 items-center">
        <h3 class="text-lg font-medium">Technologies used:</h3>
        <span
          class="ml-3 bg-blue-500 hover:bg-blue-700 text-white px-2 rounded-full"
          v-for="technology in projects[currentProject].technologies"
          :key="technology.name"
          >{{ technology }}</span
        >
      </div>
      <div class="w-full flex mt-3 items-center">
        <h3 class="text-lg font-medium">Project name:</h3>
        <span class="text-xl font-extrabold tracking-wide ml-3">{{
          projects[currentProject].name
        }}</span>
        <span class="ml-3"> {{ projects[currentProject].shortDesc }}</span>
      </div>
      <Projects @projectChange="changeProject($event)" />
      <div class="buttons text-center">
        <a :href="projects[currentProject].live" target="_blank">View Live</a>
        <a class="ml-3" :href="projects[currentProject].source" target="_blank"
          >Source Code</a
        >
      </div>
      <div class="description mt-5">
        <h3>Project Description</h3>
        <p class="mt-2">{{ projects[currentProject].longDesc }}</p>
      </div>
    </div>
    <div class="w-1/2 text-center border rounded-md p-4 mx-auto my-4">
      <a
        href="https://github.com/rogerio-romao"
        target="_blank"
        class="text-xl p-3 m-3"
      >
        GitHub
        <FontAwesomeIcon :icon="['fab', 'github-square']" />
      </a>
      <a
        href="https://codepen.io/rogerio-romao"
        target="_blank"
        class="text-xl p-3 m-3"
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
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Converse",
          type: "Front-End",
          shortDesc: "A responsive units conversion app ",
          technologies: ["Javascript", "JQuery", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/RwPaaRR",
          live: "https://codepen.io/rogerio-romao/pen/RwPaaRR"
        },
        {
          id: 2,
          name: "Todo-List",
          type: "Front-End",
          shortDesc: "A todo list App made with JQuery",
          technologies: ["Javascript", "JQuery", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/KKpzXeG",
          live: "https://codepen.io/rogerio-romao/pen/KKpzXeG"
        },
        {
          id: 3,
          name: "Javascript Calculator",
          type: "Front-End",
          shortDesc: "A complete vanilla Javascript calculator",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/mdJWEMJ",
          live: "https://codepen.io/rogerio-romao/pen/mdJWEMJ"
        },
        {
          id: 4,
          name: "Markdown Editor / Previewer",
          type: "Front-End",
          shortDesc:
            "An app where you can write Markdown language and see the rendered result",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/dyoXWNb",
          live: "https://codepen.io/rogerio-romao/pen/dyoXWNb"
        },
        {
          id: 5,
          name: "Yelp Camp",
          type: "Full-Stack",
          shortDesc: "A Yelp like website from camping grounds",
          technologies: [
            "NodeJS",
            "Express",
            "MongoDb",
            "EJS",
            "CSS3",
            "HTML5"
          ],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "#",
          live: "https://dry-escarpment-99868.herokuapp.com/"
        },
        {
          id: 6,
          name: "Rock Smacker",
          type: "Game",
          shortDesc: "A retro-style fun little arcade/puzzle game",
          technologies: ["Contruct3", "Netlify", "Deployment"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "#",
          live: "https://gifted-lovelace-6d4cdb.netlify.com/"
        },
        {
          id: 7,
          name: "Color Switch",
          type: "Game",
          shortDesc: "A retro-style arcade space shooting game",
          technologies: ["Contruct3", "Netlify", "Deployment"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "#",
          live: "https://jovial-roentgen-b310d8.netlify.com/"
        },
        {
          id: 8,
          name: "Rock Paper Scissors",
          type: "Front-End",
          shortDesc: "A play on the classic game",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/jObOzRN",
          live: "https://codepen.io/rogerio-romao/pen/jObOzRN"
        },
        {
          id: 9,
          name: "Nuxt mini-website",
          type: "Full-Stack",
          shortDesc: "Example Nuxt/Vue mini application",
          technologies: [
            "Javascript",
            "CSS3",
            "HTML5",
            "Vue",
            "Nuxt",
            "Deployment"
          ],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://github.com/rogerio-romao/nuxt1",
          live: "https://nuxt-fundamentals-project.herokuapp.com"
        },
        {
          id: 10,
          name: "Pomodoro Clock",
          type: "Front-End",
          shortDesc: "Pomodoro Session Clock",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/rNVPBJv",
          live: "https://codepen.io/rogerio-romao/pen/rNVPBJv"
        },
        {
          id: 11,
          name: "Guess the Number game",
          type: "Front-End",
          shortDesc: "Guess the number game",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/XWbQbbN",
          live: "https://codepen.io/rogerio-romao/pen/XWbQbbN"
        },
        {
          id: 12,
          name: "Jane Dev",
          type: "Front-End",
          shortDesc: "Responsive Website mockup",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "",
          live: "https://sleepy-ptolemy-a4b71e.netlify.app/"
        },
        {
          id: 13,
          name: "ZigZag",
          type: "Front-End",
          shortDesc: "An exploration of Canvas and Animation",
          technologies: ["Javascript", "CSS3", "HTML5", "Animation"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/details/vYNOdEv",
          live: "https://codepen.io/rogerio-romao/full/vYNOdEv"
        },
        {
          id: 14,
          name: "Pokemon Cards",
          type: "Full-Stack",
          shortDesc: "Pokemon Cards - React & GraphQL API",
          technologies: [
            "React",
            "GraphQL",
            "API",
            "Deployment",
            "Javascript",
            "CSS3",
            "HTML5"
          ],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://github.com/rogerio-romao/react-graphql",
          live: "https://wonderful-noether-0d72c3.netlify.app/"
        }
      ],
      currentProject: 0
    };
  },
  methods: {
    changeProject(value) {
      if (value > this.currentProject.length - 1) value = 0;
      this.currentProject = value;
    }
  },
  components: {
    Projects,
    FontAwesomeIcon
  }
};
</script>

<style></style>
