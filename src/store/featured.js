const featured = {
  state: () => ({
    featured: [
      {
        id: 1,
        name: "The Spiral",
        image: require("../assets/spiral.png"),
        shortDesc: "A JS music player / visualiser / generative art.",
        longDesc:
          "Very proud of this one, programmed from scratch, pushing the envelope with animation and canvas, custom functions including a stagger using requestanimationframe, and a custom music player. Won a Codepen Pick! Also works as a standalone desktop app, planning to have this for sale in App Store.",
        source: "https://codepen.io/rogerio-romao/pen/mdevOwm",
        live: "https://codepen.io/rogerio-romao/full/mdevOwm"
      },
      {
        id: 2,
        name: "Online Portfolio/CV",
        image: require("../assets/portfolio.png"),
        shortDesc: "My online portfolio / CV website",
        longDesc:
          "This website uses Vue as the framework with heavy use of Vuex for the state (separate modules for each component), with bespoke components for every section of the app and clear separation of concerns between data and presentation, where Tailwind is used for most CSS. Deployed on Netlify via Github integration.",
        source: "https://github.com/rogerio-romao/rogerio",
        live: "#"
      },
      {
        id: 3,
        name: "The Catstagram",
        image: require("../assets/catstagram.png"),
        shortDesc: "A mockup of an Instagram like app.",
        longDesc:
          "This was done with Vue as the framework with Nuxt bootstrapping and Vuetify for the presentation. Uses async API calls via Axios.",
        source: "https://github.com/rogerio-romao/purple-test",
        live: "https://nifty-ptolemy-7b0487.netlify.app/"
      },
      {
        id: 4,
        name: "Music Player",
        image: require("../assets/music-player.png"),
        shortDesc: "A javascript music player. Simple but beautiful and solid.",
        longDesc:
          "I wanted to program something similar to Winamp in Javascript and learn how to handle audio on the web. I am very pleased with the look and functionality i managed to include, and have some ideas to expand it in the future.",
        source: "https://codepen.io/rogerio-romao/pen/vYNvBzd",
        live: "https://codepen.io/rogerio-romao/full/vYNvBzd"
      },
      {
        id: 5,
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
        id: 6,
        name: "Converse",
        image: require("../assets/converse.png"),
        shortDesc: "A responsive units conversion app.",
        longDesc:
          "Unit Conversion Program, does distances, weights and temperatures. Sleek flat style design and attention to user experience were my focus, as well as functional and well structured and documented code. Built using JQuery.",
        source: "https://codepen.io/rogerio-romao/pen/RwPaaRR",
        live: "https://codepen.io/rogerio-romao/full/RwPaaRR"
      },
      {
        id: 7,
        name: "Guess The Number",
        image: require("../assets/guess-number.png"),
        shortDesc: "Guess the number game.",
        longDesc:
          "My take on the common programming challenge of Guess the Number game. I tried to make it into as polished an app as possible - attention to details, a nice visualizer pattern for the guesses, automatic adjustment of the maximum guesses determined by the max number chosen by the user and a nice interface.",
        source: "https://codepen.io/rogerio-romao/pen/XWbQbbN",
        live: "https://codepen.io/rogerio-romao/full/XWbQbbN"
      },
      {
        id: 8,
        name: "Password Generator",
        image: require("../assets/password-gen.png"),
        shortDesc: "Create random secure pesswords.",
        longDesc:
          "Constructed using Vue and Vuetify. Select the length of the password you want to generate and if you want numbers and/or special characters included. You also get a handy button to copy the password to clipboard.",
        source: "https://codepen.io/rogerio-romao/pen/poyoWKw",
        live: "https://codepen.io/rogerio-romao/full/poyoWKw"
      },
      {
        id: 9,
        name: "YelpCamp",
        image: require("../assets/yelpcamp.png"),
        shortDesc: "A Yelp like website from camping grounds.",
        longDesc:
          "This is a full fledged full-stack project that as the assignment from Colt Steele's WebDev Bootcamp. It's got API's, geocoding, restful routes, mvc architecture, templating, the works.",
        source: "",
        live: "https://dry-escarpment-99868.herokuapp.com/"
      },
      {
        id: 10,
        name: "The Collatz Sequence",
        image: require("../assets/collatz.png"),
        shortDesc: "A visualizer tool for the famous math sequence.",
        longDesc:
          "This was mainly about trying to develop working with canvas, animation and requestanimationframe. I used a math sequence as the base to program a graph engine on canvas that adjusts to the kind of data it is receiving. Fully commented out code as to how it works.",
        source: "https://codepen.io/rogerio-romao/pen/WNQxaWq",
        live: "https://codepen.io/rogerio-romao/full/WNQxaWq"
      },
      {
        id: 11,
        name: "Avatars",
        image: require("../assets/avatars.png"),
        shortDesc: "A profile image / avatar custom display study.",
        longDesc:
          "Codepen has these weekly themed challenges. This was my entry for a challenge on how to create a user profile 'avatar' component that would work with different sizes and types of images and i like the result very much.",
        source: "https://codepen.io/rogerio-romao/pen/zYvzmRp",
        live: "https://codepen.io/rogerio-romao/full/zYvzmRp"
      },
      {
        id: 12,
        name: "Game of Life",
        image: require("../assets/gol.png"),
        shortDesc: "My version of the classic Conway's Game of Life.",
        longDesc:
          "This was an entry for a Game of Life challenge in Codepen. Programmed a version of the classic game of life, with a feature to draw your own patterns, and learned a lot while doing so!",
        source: "https://codepen.io/rogerio-romao/pen/VwvbdZE",
        live: "https://codepen.io/rogerio-romao/full/VwvbdZE"
      },
      {
        id: 13,
        name: "Todo List",
        image: require("../assets/todov3.png"),
        shortDesc: "A todo list App made with JQuery.",
        longDesc:
          "This project uses Sass for the presentation side of things, which i worked a lot on and am pretty happy with. I use variables to make it easier, and implemented a theming functionality. Learnt how to include a drag and drop functionality to the interface as well, after researching settle on JQuery for that. App is responsive using media queries.",
        source: "https://codepen.io/rogerio-romao/pen/KKpzXeG",
        live: "https://codepen.io/rogerio-romao/full/KKpzXeG"
      },
      {
        id: 14,
        name: "JavaScript Calculator",
        image: require("../assets/javascript-calc.png"),
        shortDesc: "A complete vanilla Javascript calculator.",
        longDesc:
          "Javascript calculator coded from scratch using functional programming processes. It is working but i'm still trying to improve a couple aspects with the order of operations and dealing with max input size and decimal points.",
        source: "https://codepen.io/rogerio-romao/pen/mdJWEMJ",
        live: "https://codepen.io/rogerio-romao/full/mdJWEMJ"
      }
    ]
  })
};

export default featured;
