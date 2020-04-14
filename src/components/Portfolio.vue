<template>
  <div class="p-6">
    <h1 class="text-xl text-center">Rogerio's Portfolio</h1>
    <div class="border w-full h-full p-4 flex-col">
      <div class="w-full flex">
        <h2>Project Type:</h2>
        <span class="ml-3">{{ projects[currentProject].type }}</span>
      </div>
      <div class="w-full flex mt-3">
        <h3>Technologies used:</h3>
        <span
          class="ml-3 bg-blue-500 hover:bg-blue-700 text-white px-2 rounded-full"
          v-for="technology in projects[currentProject].technologies"
          :key="technology.name"
        >{{ technology }}</span>
      </div>
      <div class="w-full flex mt-3">
        <h3>Project name:</h3>
        <span
          class="ml-3"
        >{{ projects[currentProject].name }} - {{ projects[currentProject].shortDesc }}</span>
      </div>
      <Projects @projectChange="changeProject($event)" />
      <div class="buttons text-center">
        <a :href="projects[currentProject].live" target="_blank">View Live</a>
        <a class="ml-3" :href="projects[currentProject].source" target="_blank">Source Code</a>
      </div>
      <div class="description mt-5">
        <h3>Project Description</h3>
        <p class="mt-2">{{ projects[currentProject].longDesc }}</p>
      </div>
    </div>

    <footer>
      <small>Coded by Rogerio Romao 2020 </small>
    </footer>
  </div>
</template>

<script>
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
          longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/RwPaaRR" ,
          live: "https://codepen.io/rogerio-romao/pen/RwPaaRR"
        },
        {
          id: 2,
          name: "Todo-List",
          type: "Front-End",
          shortDesc: "A todo list App made with JQuery",
          technologies: ["Javascript", "JQuery", "CSS3", "HTML5"],
          longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/KKpzXeG" ,
          live: "https://codepen.io/rogerio-romao/pen/KKpzXeG"
        },
        {
          id: 3,
          name: "Javascript Calculator",
          type: "Front-End",
          shortDesc: "A complete vanilla Javascript calculator",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/mdJWEMJ" ,
          live: "https://codepen.io/rogerio-romao/pen/mdJWEMJ"

        },
        {
          id: 4,
          name: "Markdown Editor / Previewer",
          type: "Front-End",
          shortDesc: "An app where you can write Markdown language and see the rendered result",
          technologies: ["Javascript", "CSS3", "HTML5"],
          longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!",
          source: "https://codepen.io/rogerio-romao/pen/dyoXWNb" ,
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
        }
      ],
      currentProject: 0
    };
  },
  methods: {
    changeProject(value) {
      if (value > this.currentProject.length - 1) value = 0
      this.currentProject = value
    }
  },
  components: {
    Projects
  }
};
</script>

<style>
</style>
