const featured = {
  state: () => ({
    featured: [
      {
        id: 1,
        name: "React Realtime Chat App",
        image: require("../assets/chat.png"),
        shortDesc: "A realtime chat application a la Whatsapp.",
        longDesc:
          "This is a React application that uses Firebase for the backend. I am using Realtime Database, Authentication, Storage, Hosting and Functions. The app is using the latest React syntax, with Hooks, including custom hooks, for things like api calls, media queries and modal windows. Uses the Notification api to send messages to users and RSuite UI library.",
        source: "https://github.com/rogerio-romao/react-chat-app",
        live: "https://react-chat-app-fca7d.web.app/"
      },
      {
        id: 2,
        name: "The Spiral",
        image: require("../assets/spiral.png"),
        shortDesc: "A JS music player / visualiser / generative art.",
        longDesc:
          "Very proud of this one, programmed from scratch, pushing the envelope with animation and canvas, custom functions including a stagger using requestanimationframe, and a custom music player. Won a Codepen Pick! Also works as a standalone desktop app, planning to have this for sale in App Store.",
        source: "https://codepen.io/rogerio-romao/pen/mdevOwm",
        live: "https://codepen.io/rogerio-romao/full/mdevOwm"
      },
      {
        id: 3,
        name: "Online Portfolio/CV",
        image: require("../assets/portfolio.png"),
        shortDesc: "My online portfolio / CV website",
        longDesc:
          "This website uses Vue as the framework with heavy use of Vuex for the state (separate modules for each component), with bespoke components for every section of the app and clear separation of concerns between data and presentation, where Tailwind is used for most CSS. Deployed on Netlify via Github integration.",
        source: "https://github.com/rogerio-romao/rogerio",
        live: "#"
      },
      {
        id: 4,
        name: "Coffee Shop",
        image: require("../assets/coffee-shop.png"),
        shortDesc: "A shop where you can buy coffee products",
        longDesc:
          "This is an e-commerce website made on Gatsby and React, with a GraphQL backend, that uses the Contentful API for the content management. It has continuous integration when deploying to Github via Netlify and also a webhook setup where if the user changes only the Contentful data and not the code itself, a build is triggered on Netlify. The cart is an implementation of SnipCart.",
        source: "https://github.com/rogerio-romao/gatsby-coffee-project",
        live: "https://elated-wing-b66940.netlify.app/"
      },
      {
        id: 5,
        name: "The Catstagram",
        image: require("../assets/catstagram.png"),
        shortDesc: "A mockup of an Instagram like app.",
        longDesc:
          "This was done with Vue as the framework with Nuxt bootstrapping and Vuetify for the presentation. Uses async API calls via Axios.",
        source: "https://github.com/rogerio-romao/purple-test",
        live: "https://nifty-ptolemy-7b0487.netlify.app/"
      },
      {
        id: 6,
        name: "Music Player",
        image: require("../assets/music-player.png"),
        shortDesc: "A javascript music player. Simple but beautiful and solid.",
        longDesc:
          "I wanted to program something similar to Winamp in Javascript and learn how to handle audio on the web. I am very pleased with the look and functionality i managed to include, and have some ideas to expand it in the future.",
        source: "https://codepen.io/rogerio-romao/pen/vYNvBzd",
        live: "https://codepen.io/rogerio-romao/full/vYNvBzd"
      },
      {
        id: 7,
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
        id: 8,
        name: "Converse",
        image: require("../assets/converse.png"),
        shortDesc: "A responsive units conversion app.",
        longDesc:
          "Unit Conversion Program, does distances, weights and temperatures. Sleek flat style design and attention to user experience were my focus, as well as functional and well structured and documented code. Built using JQuery.",
        source: "https://codepen.io/rogerio-romao/pen/RwPaaRR",
        live: "https://codepen.io/rogerio-romao/full/RwPaaRR"
      },
      {
        id: 9,
        name: "Guess The Number",
        image: require("../assets/guess-number.png"),
        shortDesc: "Guess the number game.",
        longDesc:
          "My take on the common programming challenge of Guess the Number game. I tried to make it into as polished an app as possible - attention to details, a nice visualizer pattern for the guesses, automatic adjustment of the maximum guesses determined by the max number chosen by the user and a nice interface.",
        source: "https://codepen.io/rogerio-romao/pen/XWbQbbN",
        live: "https://codepen.io/rogerio-romao/full/XWbQbbN"
      },
      {
        id: 10,
        name: "Password Generator",
        image: require("../assets/password-gen.png"),
        shortDesc: "Create random secure pesswords.",
        longDesc:
          "Constructed using Vue and Vuetify. Select the length of the password you want to generate and if you want numbers and/or special characters included. You also get a handy button to copy the password to clipboard.",
        source: "https://codepen.io/rogerio-romao/pen/poyoWKw",
        live: "https://codepen.io/rogerio-romao/full/poyoWKw"
      },
      {
        id: 11,
        name: "YelpCamp",
        image: require("../assets/yelpcamp.png"),
        shortDesc: "A Yelp like website from camping grounds.",
        longDesc:
          "This is a full fledged full-stack project that as the assignment from Colt Steele's WebDev Bootcamp. It's got API's, geocoding, restful routes, mvc architecture, templating, the works.",
        source: "",
        live: "https://dry-escarpment-99868.herokuapp.com/"
      },
      {
        id: 12,
        name: "The Collatz Sequence",
        image: require("../assets/collatz.png"),
        shortDesc: "A visualizer tool for the famous math sequence.",
        longDesc:
          "This was mainly about trying to develop working with canvas, animation and requestanimationframe. I used a math sequence as the base to program a graph engine on canvas that adjusts to the kind of data it is receiving. Fully commented out code as to how it works.",
        source: "https://codepen.io/rogerio-romao/pen/WNQxaWq",
        live: "https://codepen.io/rogerio-romao/full/WNQxaWq"
      },
      {
        id: 13,
        name: "Avatars",
        image: require("../assets/avatars.png"),
        shortDesc: "A profile image / avatar custom display study.",
        longDesc:
          "Codepen has these weekly themed challenges. This was my entry for a challenge on how to create a user profile 'avatar' component that would work with different sizes and types of images and i like the result very much.",
        source: "https://codepen.io/rogerio-romao/pen/zYvzmRp",
        live: "https://codepen.io/rogerio-romao/full/zYvzmRp"
      },
      {
        id: 14,
        name: "Game of Life",
        image: require("../assets/gol.png"),
        shortDesc: "My version of the classic Conway's Game of Life.",
        longDesc:
          "This was an entry for a Game of Life challenge in Codepen. Programmed a version of the classic game of life, with a feature to draw your own patterns, and learned a lot while doing so!",
        source: "https://codepen.io/rogerio-romao/pen/VwvbdZE",
        live: "https://codepen.io/rogerio-romao/full/VwvbdZE"
      },
      {
        id: 15,
        name: "Netflix Clone",
        image: require("../assets/netflix-clone.png"),
        shortDesc: "Netflix clone using TMDB API with movie trailer previews.",
        longDesc:
          "This is a React application that is hosted on Firebase, done using Hooks and functional components. The data is coming from the TMDB API, and each title can be clicked to watch a movie preview.",
        source: "https://github.com/rogerio-romao/netflix-clone-react",
        live: "https://netflix-clone-f2569.web.app/"
      }
    ]
  })
};

export default featured;
