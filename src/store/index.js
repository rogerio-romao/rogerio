import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import courses from "./courses";
import images from "./images";
import featured from "./featured";
import details from "./details";

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
          "Unit Conversion Program, does distances, weights and temperatures. Sleek flat style design and attention to user experience were my focus, as well as functional and well structured and documented code. Built using JQuery.",
        details: true
      },
      {
        id: 2,
        name: "Todo-List",
        type: "Front-End",
        shortDesc: "A todo list App made with JQuery.",
        technologies: ["Javascript", "JQuery", "CSS3", "HTML5"],
        longDesc:
          "This project uses Sass for the presentation side of things, which i worked a lot on and am pretty happy with. I use variables to make it easier, and implemented a theming functionality. Learnt how to include a drag and drop functionality to the interface as well, after researching settle on JQuery for that. App is responsive using media queries.",
        details: true
      },
      {
        id: 3,
        name: "Javascript Calculator",
        type: "Front-End",
        shortDesc: "A complete vanilla Javascript calculator.",
        technologies: ["Javascript", "CSS3", "HTML5", "jQuery"],
        longDesc:
          "Javascript calculator coded from scratch using functional programming processes. Makes use of jQuery for and css variables."
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
          "This is a full fledged full-stack project that as the assignment from Colt Steele's WebDev Bootcamp. It's got API's, geocoding, restful routes, mvc architecture, templating, the works.",
        details: true
      },
      {
        id: 6,
        name: "Rock Smacker",
        type: "Game",
        shortDesc: "A retro-style fun little arcade/puzzle game.",
        technologies: ["Contruct3", "Netlify", "Deployment"],
        longDesc:
          "Using the Construct3 game engine, it's a fun little puzzle game, first experiment doing a game following some tutorials, not something i'm probably gonna pursue and there's some bugs but it was fun to make."
      },
      {
        id: 7,
        name: "Color Switch",
        type: "Game",
        shortDesc: "A retro-style arcade space shooting game",
        technologies: ["Contruct3", "Netlify", "Deployment"],
        longDesc:
          "Game made using the Construct 3 game engine. This was the second experiment of creating a game and it works pretty well altough it is very simple."
      },
      {
        id: 8,
        name: "Rock Paper Scissors",
        type: "Front-End",
        shortDesc: "A play on the classic game",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "Someone was playing this on a movie I was watching, and I set out to try to program this game, as fast as possible as a challenge, this was roughly 2hrs work."
      },
      {
        id: 9,
        name: "Nuxt mini-website",
        type: "Full-Stack",
        shortDesc: "Example Nuxt/Vue mini blog",
        technologies: [
          "Javascript",
          "CSS3",
          "HTML5",
          "Vue",
          "Nuxt",
          "Heroku",
          "Deployment"
        ],
        longDesc:
          "A simple nuxt / vue website / blog as a proof of concept course project from VueSchool. Uses the auto-routing features of nuxt, components, computed properties and methods from Vue. Deployed to Heroku."
      },
      {
        id: 10,
        name: "Pomodoro Clock",
        type: "Front-End",
        shortDesc: "Pomodoro Session Clock",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "A timer app with session and break intervals, dealing with the complexities of time and interval management in coding. There is a session timer and a break timer and the cycle through continuously, with independent intervals, and with a beep everytime a timer runs out. The interface colors switch as well between session and break.",
        details: true
      },
      {
        id: 11,
        name: "Guess the Number game",
        type: "Front-End",
        shortDesc: "Guess the number game.",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "My take on the common programming challenge of Guess the Number game. I tried to push this simple problem into as much of a polished app as possible with attention to all details, a nice visualizer pattern for the guesses, automatic adjustment of the maximum guesses determined by the max number chosen by the user and a nice clean interface.",
        details: true
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
          "This app was built with React and was my first attempt at working with GraphQL which is great for dealing with API calls, in this case building some cards out of the Pokemon API."
      },
      {
        id: 15,
        name: "The Collatz Sequence",
        type: "Front-End",
        shortDesc: "A visualizer tool for the famous math sequence.",
        technologies: ["Canvas", "Animation", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "This was mainly about trying to develop working with canvas, animation and requestanimationframe. I used a math sequence as the base to program a graph engine on canvas that adjusts to the kind of data it is receiving. Fully commented out code as to how it works.",
        details: true
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
          "This is a very simple game of tic tac toe done mainly to explore React and it's capabilities to time travel the state."
      },
      {
        id: 18,
        name: "The Spiral",
        type: "Front-End",
        shortDesc: "A JS music player / visualiser / generative art",
        technologies: ["Canvas", "Animation", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "Very proud of this one, programmed from scratch, pushing the envelope with animation and canvas, custom functions including a stagger using requestanimationframe, and a custom music player. Winner of a Codepen Pick! Also works as a standalone desktop app, planning to have this for sale in App Store.",
        details: true
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
          "This is an app that has several categories like countries, colors, number, music keys etc, and the app will get a random value from them. App built in VueJS with Vuetify for the interface, and using a couple of API's for some of the categories.",
        details: true
      },
      {
        id: 21,
        name: "Music Player",
        type: "Front-End",
        shortDesc: "A javascript music player. Simple but beautiful and solid.",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "I wanted to program something similar to Winamp in Javascript and learn how to handle audio on the web. I am very pleased with the look and functionality i managed to include, and have some ideas to expand it in the future.",
        details: true
      },
      {
        id: 22,
        name: "Password Generator",
        type: "Front-End",
        shortDesc: "An app to create random secure pesswords.",
        technologies: ["Vue", "Vuetify", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "Constructed using Vue and Vuetify. Select the length of the password you want to generate and if you want numbers and/or special characters included. You also get a handy button to copy the password to clipboard.",
        details: true
      },
      {
        id: 23,
        name: "Online Portfolio/CV",
        type: "Full-Stack",
        shortDesc: "My online portfolio / CV website",
        technologies: [
          "Vue",
          "Vuex",
          "Tailwind",
          "FontAwesome",
          "Git",
          "Netlify",
          "Javascript",
          "CSS3",
          "HTML5"
        ],
        longDesc:
          "This website uses Vue as the framework with heavy use of Vuex for the state (separate modules for each component), with bespoke components for every section of the app and clear separation of concerns between data and presentation, where Tailwind is used for most CSS. Deployed on Netlify via Github integration.",
        details: true
      },
      {
        id: 24,
        name: "The Catstagram",
        type: "Full-Stack",
        shortDesc: "A mockup of an Instagram like app",
        technologies: [
          "Vue",
          "Nuxt",
          "Vuetify",
          "Axios",
          "APIs",
          "Git",
          "Netlify",
          "Javascript",
          "CSS3",
          "HTML5"
        ],
        longDesc:
          "This was done with Vue as the framework with Nuxt bootstrapping and Vuetify for the presentation. Uses async API calls via Axios.",
        details: true
      },
      {
        id: 25,
        name: "Music Database",
        type: "Front-End",
        shortDesc: "A music database to catalogue your tracks.",
        technologies: [
          "Vue",
          "Nuxt",
          "Vuetify",
          "Git",
          "Netlify",
          "Javascript",
          "CSS3",
          "HTML5"
        ],
        longDesc:
          "Having been a DJ, this is something I wanted to create to help me catalogue my collection. It is done using Vue's Vuex store, with the interface using the familiar Goggle Material Design specs in dark mode, courtesy of Vuetify. App build using Nuxt framework. You can add tracks, edit them and delete them, with fields for the most common properties."
      },
      {
        id: 26,
        name: "Coffe Shop",
        type: "Full-Stack",
        shortDesc: "A shop where you can buy coffee products.",
        technologies: [
          "Gatsby",
          "React",
          "Contentful",
          "GraphQL",
          "SnipCart",
          "Git",
          "Netlify",
          "Javascript",
          "CSS3",
          "HTML5"
        ],
        longDesc:
          "This is an e-commerce website based on Gatsby and React, with a GraphQL backend, that uses the Contentful API for the content management and FormSpree for the contact form. It has continuous integration when deploying to Github via Netlify and also a webhook setup where if the user changes only the Contentful data and not the code itself, a build is triggered on Netlify. The cart is an implementation of SnipCart based on their API and Gatsby plugin."
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: { courses, images, featured, details }
});
