import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        name: "Converse",
        type: "Front-End",
        shortDesc: "A responsive units conversion app.",
        technologies: ["Javascript", "JQuery", "CSS3", "HTML5"],
        longDesc:
          "Unit Conversion Program, does distances, weights and temperatures. Sleek flat style design and attention to user experience were my focus, as well as functional and well structured and documented code. Built using JQuery."
      },
      {
        id: 2,
        name: "Todo-List",
        type: "Front-End",
        shortDesc: "A todo list App made with JQuery.",
        technologies: ["Javascript", "JQuery", "CSS3", "HTML5"],
        longDesc:
          "This project uses Sass for the presentation side of things, which i worked a lot on and am pretty happy with. I use variables to make it easier, and implemented a theming functionality. Learnt how to include a drag and drop functionality to the interface as well, after researching settle on JQuery for that. App is responsive using media queries."
      },
      {
        id: 3,
        name: "Javascript Calculator",
        type: "Front-End",
        shortDesc: "A complete vanilla Javascript calculator.",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "Javascript calculator coded from scratch using functional programming processes. It is working but i'm still trying to improve a couple aspects with the order of operations and dealing with max input size and decimal points."
      },
      {
        id: 4,
        name: "Markdown Editor / Previewer",
        type: "Front-End",
        shortDesc:
          "An app where you can write Markdown language and see the rendered result",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "A Markdown language editor / previewer app coded from scratch using a couple npm packages."
      },
      {
        id: 5,
        name: "Yelp Camp",
        type: "Full-Stack",
        shortDesc: "A Yelp like website from camping grounds.",
        technologies: ["NodeJS", "Express", "MongoDb", "EJS", "CSS3", "HTML5"],
        longDesc:
          "This is a full fledged full-stack project that as the assignment from Colt Steele's WebDev Bootcamp. It's got API's, geocoding, restful routes, mvc architecture, templating, the works."
      },
      {
        id: 6,
        name: "Rock Smacker",
        type: "Game",
        shortDesc: "A retro-style fun little arcade/puzzle game.",
        technologies: ["Contruct3", "Netlify", "Deployment"],
        longDesc:
          "Using the Construct3 game engine, it's a fun little puzzle game with a few kinks i still need to iron out."
      },
      {
        id: 7,
        name: "Color Switch",
        type: "Game",
        shortDesc: "A retro-style arcade space shooting game",
        technologies: ["Contruct3", "Netlify", "Deployment"],
        longDesc: "Game made using the Construct 3 game engine."
      },
      {
        id: 8,
        name: "Rock Paper Scissors",
        type: "Front-End",
        shortDesc: "A play on the classic game",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "I set out to program my version of this popular game, making it look as good as possible."
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
          "A simple nuxt / vue website as a proof of concept course project. Uses the auto-routing features of nuxt, components, computed properties and methods from Vue."
      },
      {
        id: 10,
        name: "Pomodoro Clock",
        type: "Front-End",
        shortDesc: "Pomodoro Session Clock",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "A timer app with session and break intervals, dealing with the complexities of time and interval management in coding."
      },
      {
        id: 11,
        name: "Guess the Number game",
        type: "Front-End",
        shortDesc: "Guess the number game.",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "My take on the common programming challenge of Guess the Number game. I tried to push this simple problem into as much of a polished app as possible with attention to all details, a nice visualizer pattern for the guesses, automatic adjustment of the maximum guesses determined by the max number chosen by the user and a nice clean interface."
      },
      {
        id: 12,
        name: "Jane Dev",
        type: "Front-End",
        shortDesc: "Responsive Website mockup",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "A full fledged out website / portfolio mockup with responsive design in mind dealing mostly with the CSS side of things."
      },
      {
        id: 13,
        name: "ZigZag",
        type: "Front-End",
        shortDesc: "An exploration of Canvas and Animation",
        technologies: ["Javascript", "CSS3", "HTML5", "Animation"],
        longDesc:
          "An exploration of the canvas element and animation with interactive controls."
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
        shortDesc: "A visualizer tool for the famous math sequence.",
        technologies: ["Canvas", "Animation", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "This was mainly about trying to develop working with canvas, animation and requestanimationframe. I used a math sequence as the base to program a graph engine on canvas that adjusts to the kind of data it is receiving. Fully commented out code as to how it works."
      },
      {
        id: 16,
        name: "Avatars",
        type: "Front-End",
        shortDesc: "A profile image / avatar custom display study.",
        technologies: ["Javascript", "CSS3"],
        longDesc:
          "Codepen has these weekly themed challenges. This was my entry for a challenge on how to create a user profile 'avatar' component that would work with different sizes and types of images and i like the result very much."
      },
      {
        id: 17,
        name: "Tic-Tac-Toe",
        type: "Full-Stack",
        shortDesc: "Game of Tic-Tac-Toe in React with time-travel feature",
        technologies: ["React", "Deployment", "Javascript", "CSS3"],
        longDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam solutansuscipit ad tempora quod beatae, dolorum ratione vitae. Illo iste sapiente recusandae cum voluptas illum doloribus inventore omnis architecto quidem!"
      },
      {
        id: 18,
        name: "The Spiral",
        type: "Front-End",
        shortDesc: "A JS music player / visualiser / generative art",
        technologies: ["Canvas", "Animation", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "Very proud of this one, programmed from scratch, pushing the envelope with animation and canvas, custom functions including a stagger using requestanimationframe, and a custom music player. Winner of a Codepen Pick!"
      },
      {
        id: 19,
        name: "Game of Life",
        type: "Front-End",
        shortDesc: "My version of the classic Conway's Game of Life",
        technologies: ["Canvas", "Animation", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "This was an entry for a Game of Life challenge in Codepen. Programmed a version of the classic game of life, with a feature to draw your own patterns, and learned a lot while doing so!"
      },
      {
        id: 20,
        name: "The Randomizer",
        type: "Full-Stack",
        shortDesc:
          "An app that gives you a random value on different categories.",
        technologies: [
          "Vue",
          "Vuetify",
          "API's",
          "Javascript",
          "CSS3",
          "HTML5"
        ],
        longDesc:
          "This is an app that has several categories like countries, colors, number, music keys etc, and the app will get a random value from them. App built in VueJS with Vuetify for the interface, and using a couple of API's for some of the categories."
      },
      {
        id: 21,
        name: "Music Player",
        type: "Front-End",
        shortDesc: "A javascript music player. Simple but beautiful and solid.",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "I wanted to program something similar to Winamp in Javascript and learn how to handle audio on the web. I am very pleased with the look and functionality i managed to include, and have some ideas to expand it in the future."
      }
    ],
    images: [
      {
        id: 1,
        url: "converse.png",
        source: "https://codepen.io/rogerio-romao/pen/RwPaaRR",
        live: "https://codepen.io/rogerio-romao/full/RwPaaRR"
      },
      {
        id: 2,
        url: "todov3.png",
        source: "https://codepen.io/rogerio-romao/pen/KKpzXeG",
        live: "https://codepen.io/rogerio-romao/full/KKpzXeG"
      },
      {
        id: 3,
        url: "javascript-calc.png",
        source: "https://codepen.io/rogerio-romao/pen/mdJWEMJ",
        live: "https://codepen.io/rogerio-romao/full/mdJWEMJ"
      },
      {
        id: 4,
        url: "markdown-preview.png",
        source: "https://codepen.io/rogerio-romao/pen/dyoXWNb",
        live: "https://codepen.io/rogerio-romao/full/dyoXWNb"
      },
      {
        id: 5,
        url: "yelpcamp.png",
        source: "#",
        live: "https://dry-escarpment-99868.herokuapp.com/"
      },
      {
        id: 6,
        url: "rock-smacker.png",
        source: "#",
        live: "https://gifted-lovelace-6d4cdb.netlify.com/"
      },
      {
        id: 7,
        url: "color-switch.png",
        source: "#",
        live: "https://jovial-roentgen-b310d8.netlify.com/"
      },
      {
        id: 8,
        url: "rock-paper-scissors.png",
        source: "https://codepen.io/rogerio-romao/pen/jObOzRN",
        live: "https://codepen.io/rogerio-romao/pen/jObOzRN"
      },
      {
        id: 9,
        url: "nuxt.png",
        source: "https://github.com/rogerio-romao/nuxt1",
        live: "https://nuxt-fundamentals-project.herokuapp.com"
      },
      {
        id: 10,
        url: "pomodoro.png",
        source: "https://codepen.io/rogerio-romao/pen/rNVPBJv",
        live: "https://codepen.io/rogerio-romao/pen/rNVPBJv"
      },
      {
        id: 11,
        url: "guess-number.png",
        source: "https://codepen.io/rogerio-romao/pen/XWbQbbN",
        live: "https://codepen.io/rogerio-romao/pen/XWbQbbN"
      },
      {
        id: 12,
        url: "jane-dev.png",
        source: "#",
        live: "https://sleepy-ptolemy-a4b71e.netlify.app/"
      },
      {
        id: 13,
        url: "zigzag.png",
        source: "https://codepen.io/rogerio-romao/details/vYNOdEv",
        live: "https://codepen.io/rogerio-romao/full/vYNOdEv"
      },
      {
        id: 14,
        url: "pokemon.png",
        source: "https://github.com/rogerio-romao/react-graphql",
        live: "https://wonderful-noether-0d72c3.netlify.app/"
      },
      {
        id: 15,
        url: "collatz.png",
        source: "https://codepen.io/rogerio-romao/pen/WNQxaWq",
        live: "https://codepen.io/rogerio-romao/full/WNQxaWq"
      },
      {
        id: 16,
        url: "avatars.png",
        source: "https://codepen.io/rogerio-romao/pen/zYvzmRp",
        live: "https://codepen.io/rogerio-romao/full/zYvzmRp"
      },
      {
        id: 17,
        url: "tic-tac.png",
        source: "https://github.com/rogerio-romao/tic-tac-toe",
        live: "https://objective-einstein-8e8c00.netlify.app/"
      },
      {
        id: 18,
        url: "spiral.png",
        source: "https://codepen.io/rogerio-romao/pen/mdevOwm",
        live: "https://codepen.io/rogerio-romao/full/mdevOwm"
      },
      {
        id: 19,
        url: "gol.png",
        source: "https://codepen.io/rogerio-romao/pen/VwvbdZE",
        live: "https://codepen.io/rogerio-romao/full/VwvbdZE"
      },
      {
        id: 20,
        url: "randomizer.png",
        source: "https://codepen.io/rogerio-romao/pen/Baoqvmm",
        live: "https://codepen.io/rogerio-romao/full/Baoqvmm"
      },
      {
        id: 21,
        url: "music-player.png",
        source: "https://codepen.io/rogerio-romao/pen/vYNvBzd",
        live: "https://codepen.io/rogerio-romao/full/vYNvBzd"
      }
    ],
    featured: [
      {
        id: 1,
        name: "The Spiral",
        image: require("../assets/spiral.png"),
        shortDesc: "A JS music player / visualiser / generative art.",
        longDesc:
          "Very proud of this one, programmed from scratch, pushing the envelope with animation and canvas, custom functions including a stagger using requestanimationframe, and a custom music player. Won a Codepen Pick!",
        source: "https://codepen.io/rogerio-romao/pen/mdevOwm",
        live: "https://codepen.io/rogerio-romao/full/mdevOwm"
      },
      {
        id: 2,
        name: "Music Player",
        image: require("../assets/music-player.png"),
        shortDesc: "A javascript music player. Simple but beautiful and solid.",
        longDesc:
          "I wanted to program something similar to Winamp in Javascript and learn how to handle audio on the web. I am very pleased with the look and functionality i managed to include, and have some ideas to expand it in the future.",
        source: "https://codepen.io/rogerio-romao/pen/vYNvBzd",
        live: "https://codepen.io/rogerio-romao/full/vYNvBzd"
      },
      {
        id: 3,
        name: "The Randomizer",
        image: require("../assets/randomizer.png"),
        shortDesc:
          "An app that gives you a random value on different categories.",
        longDesc:
          "This is an app that has several categories like countries, colors, number, music keys etc, and the app will get a random value from them. App built in VueJS with Vuetify for the interface, and using a couple of API's for some of the categories.",
        source: "https://codepen.io/rogerio-romao/pen/Baoqvmm",
        live: "https://codepen.io/rogerio-romao/full/Baoqvmm"
      },
      {
        id: 4,
        name: "Converse",
        image: require("../assets/converse.png"),
        shortDesc: "A responsive units conversion app.",
        longDesc:
          "Unit Conversion Program, does distances, weights and temperatures. Sleek flat style design and attention to user experience were my focus, as well as functional and well structured and documented code. Built using JQuery.",
        source: "https://codepen.io/rogerio-romao/pen/RwPaaRR",
        live: "https://codepen.io/rogerio-romao/full/RwPaaRR"
      },
      {
        id: 5,
        name: "Guess The Number",
        image: require("../assets/guess-number.png"),
        shortDesc: "Guess the number game.",
        longDesc:
          "My take on the common programming challenge of Guess the Number game. I tried to push this simple problem into as much of a polished app as possible with attention to all details, a nice visualizer pattern for the guesses, automatic adjustment of the maximum guesses determined by the max number chosen by the user and a nice clean interface. ",
        source: "https://codepen.io/rogerio-romao/pen/XWbQbbN",
        live: "https://codepen.io/rogerio-romao/full/XWbQbbN"
      },
      {
        id: 6,
        name: "YelpCamp",
        image: require("../assets/yelpcamp.png"),
        shortDesc: "A Yelp like website from camping grounds.",
        longDesc:
          "This is a full fledged full-stack project that as the assignment from Colt Steele's WebDev Bootcamp. It's got API's, geocoding, restful routes, mvc architecture, templating, the works.",
        source: "",
        live: "https://dry-escarpment-99868.herokuapp.com/"
      },
      {
        id: 7,
        name: "The Collatz Sequence",
        image: require("../assets/collatz.png"),
        shortDesc: "A visualizer tool for the famous math sequence.",
        longDesc:
          "This was mainly about trying to develop working with canvas, animation and requestanimationframe. I used a math sequence as the base to program a graph engine on canvas that adjusts to the kind of data it is receiving. Fully commented out code as to how it works.",
        source: "https://codepen.io/rogerio-romao/pen/WNQxaWq",
        live: "https://codepen.io/rogerio-romao/full/WNQxaWq"
      },
      {
        id: 8,
        name: "Avatars",
        image: require("../assets/avatars.png"),
        shortDesc: "A profile image / avatar custom display study.",
        longDesc:
          "Codepen has these weekly themed challenges. This was my entry for a challenge on how to create a user profile 'avatar' component that would work with different sizes and types of images and i like the result very much.",
        source: "https://codepen.io/rogerio-romao/pen/zYvzmRp",
        live: "https://codepen.io/rogerio-romao/full/zYvzmRp"
      },
      {
        id: 9,
        name: "Game of Life",
        image: require("../assets/gol.png"),
        shortDesc: "My version of the classic Conway's Game of Life.",
        longDesc:
          "This was an entry for a Game of Life challenge in Codepen. Programmed a version of the classic game of life, with a feature to draw your own patterns, and learned a lot while doing so!",
        source: "https://codepen.io/rogerio-romao/pen/VwvbdZE",
        live: "https://codepen.io/rogerio-romao/full/VwvbdZE"
      },
      {
        id: 10,
        name: "Todo List",
        image: require("../assets/todov3.png"),
        shortDesc: "A todo list App made with JQuery.",
        longDesc:
          "This project uses Sass for the presentation side of things, which i worked a lot on and am pretty happy with. I use variables to make it easier, and implemented a theming functionality. Learnt how to include a drag and drop functionality to the interface as well, after researching settle on JQuery for that. App is responsive using media queries.",
        source: "https://codepen.io/rogerio-romao/pen/KKpzXeG",
        live: "https://codepen.io/rogerio-romao/full/KKpzXeG"
      },
      {
        id: 11,
        name: "JavaScript Calculator",
        image: require("../assets/javascript-calc.png"),
        shortDesc: "A complete vanilla Javascript calculator.",
        longDesc:
          "Javascript calculator coded from scratch using functional programming processes. It is working but i'm still trying to improve a couple aspects with the order of operations and dealing with max input size and decimal points.",
        source: "https://codepen.io/rogerio-romao/pen/mdJWEMJ",
        live: "https://codepen.io/rogerio-romao/full/mdJWEMJ"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
