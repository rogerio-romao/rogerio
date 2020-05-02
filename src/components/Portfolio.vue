<template>
  <div class="p-6 mx-auto bg-orange-200">
    <h1 class="text-4xl font-extrabold text-right text-gray-700 mb-3 underline">
      Rogerio's Portfolio
    </h1>
    <div
      class="border border-orange-400 bg-orange-100 w-full h-full p-4 flex-col mx-auto"
    >
      <div class="w-full flex items-center mx-auto border-b pb-2">
        <h3 class="text-md font-semibold uppercase">Project Type:</h3>
        <span class="ml-3 align-text-bottom">{{
          projects[currentProject].type
        }}</span>
      </div>
      <div class="w-full flex mt-3 items-center border-b pb-2 flex-wrap">
        <h3 class="text-md font-semibold uppercase">Technologies used:</h3>
        <span
          class="ml-3 bg-green-500 hover:bg-blue-600 text-white px-2 rounded-full"
          v-for="technology in projects[currentProject].technologies"
          :key="technology.name"
          >{{ technology }}</span
        >
      </div>
      <div class="w-full flex mt-3 items-center border-b pb-2 flex-wrap">
        <h3 class="text-md font-semibold uppercase">Project name:</h3>
        <span
          class="text-2xl text-blue-500 border p-2 rounded-lg shadow-sm align-middle font-extrabold tracking-wide ml-3"
          >{{ projects[currentProject].name }}</span
        >
        <span class="ml-3"> {{ projects[currentProject].shortDesc }}</span>
      </div>
      <Projects @projectChange="changeProject($event)" />
      <div class="description mt-5">
        <h3 class="text-md font-semibold uppercase">Project Description</h3>
        <p class="mt-2">{{ projects[currentProject].longDesc }}</p>
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 2,
          name: "Todo-List",
          type: "Front-End",
          shortDesc: "A todo list App made with JQuery",
          technologies: ["Javascript", "JQuery", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 3,
          name: "Javascript Calculator",
          type: "Front-End",
          shortDesc: "A complete vanilla Javascript calculator",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 4,
          name: "Markdown Editor / Previewer",
          type: "Front-End",
          shortDesc:
            "An app where you can write Markdown language and see the rendered result",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 6,
          name: "Rock Smacker",
          type: "Game",
          shortDesc: "A retro-style fun little arcade/puzzle game",
          technologies: ["Contruct3", "Netlify", "Deployment"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 7,
          name: "Color Switch",
          type: "Game",
          shortDesc: "A retro-style arcade space shooting game",
          technologies: ["Contruct3", "Netlify", "Deployment"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 8,
          name: "Rock Paper Scissors",
          type: "Front-End",
          shortDesc: "A play on the classic game",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 10,
          name: "Pomodoro Clock",
          type: "Front-End",
          shortDesc: "Pomodoro Session Clock",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 11,
          name: "Guess the Number game",
          type: "Front-End",
          shortDesc: "Guess the number game",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 12,
          name: "Jane Dev",
          type: "Front-End",
          shortDesc: "Responsive Website mockup",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 13,
          name: "ZigZag",
          type: "Front-End",
          shortDesc: "An exploration of Canvas and Animation",
          technologies: ["Javascript", "CSS3", "HTML5", "Animation"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 15,
          name: "The Collatz Sequence",
          type: "Front-End",
          shortDesc: "A visualizer tool for the famous math sequence",
          technologies: ["Canvas", "Animation", "Javascript", "CSS3", "HTML5"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 16,
          name: "Avatars",
          type: "Front-End",
          shortDesc: "A profile image / avatar custom display study",
          technologies: ["Javascript", "CSS3"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
        },
        {
          id: 16,
          name: "Tic-Tac-Toe",
          type: "Full-Stack",
          shortDesc: "Game of Tic-Tac-Toe in React with time-travel feature",
          technologies: ["React", "Deployment", "Javascript", "CSS3"],
          longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
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
