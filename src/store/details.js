const details = {
  state: () => [
    {
      id: 1,
      head:
        "This was the first app i created from scratch since coming back to coding, without following any tutorials. I had the idea and started by thinking about the interface and selecting a pleasing color scheme and coming up with the layout and the name. There is an animation on the title/logo h1 that conveys the idea of conversion. There are svg icons for the different types of conversion with custom tooltips to indicate what they do. The select boxes are also super customized and look great in my opinion. CSS was done from scratch, no CSS frameworks. I coded it using Sass and variables for easy modification and flexibility. The app works well at any screen size via media queries. I used jQuery for the DOM stuff and the javascript is all commented out to explain what the code does. The rest was just researching the conversion rates and implementing the inputs and a lot of conversion functions.",
      images1: [
        require("../assets/converse-details1.png"),
        require("../assets/converse-details2.png"),
        require("../assets/converse-details3.png"),
        require("../assets/converse-details4.png")
      ]
    },
    {
      id: 2,
      head:
        "The inevitable todo list app. I mostly wanted to explore the interface building side of things, with theming, pleasing color schemes and nice UI, with drag and drop reordering of the list items. It's done without frameworks but with jQuery to facilitate the DOM manipulation. The app is responsive and animates when changing sizes. Dark and light themes provided. CSS using Sass and variables.",
      images1: [
        require("../assets/todov3-details1.png"),
        require("../assets/todov3-details2.png"),
        require("../assets/todov3-details3.png")
      ]
    },
    {
      id: 5,
      head:
        "This was coded for the FreeCodeCamp front end certification challenges. We are given some user stories and have to build the app to pass a test suite that meets all those stories. I coded it in plain vanilla JS, the biggest challenge was to keep two separate timers with different intervals syncronised and cycling through seamlessly, and in the end i was pretty satisfied with how it turned out.",
      images1: [
        require("../assets/pomodoro-details1.png"),
        require("../assets/pomodoro-details2.png")
      ]
    },
    {
      id: 6,
      head:
        "I paid a lot of attention to the interface on this one, really like the color scheme and the flat style design. The app responds very well at any screen size. There is a cool visualizer that shows your guesses and if you are high or low or correct, with a nice animation on the squares. The inputs are validated to correct type and range. The max number of guesses is calculated dynamically based on the user set max value, which also adjust the size of the squares on the visualizer.",
      images1: [
        require("../assets/guess-number-details1.png"),
        require("../assets/guess-number-details2.png"),
        require("../assets/guess-number-details3.png"),
        require("../assets/guess-number-details4.png")
      ]
    },
    {
      id: 7,
      head:
        "An article about the mathematical Collatz Sequence caught my attention and i thought it would be interesting and a fun challenge to create a visualizer for it. The user selects the starting number and then a graph animates the progression of the sequence. There is a lot of clever calculations going on in the background. The whole sequence is pre-rendered in memory to access certain variables, and the animation scales in both time and vertical scale depending on the input and output, with graphics laid out on top of the graph at the end with certain key statistic values.",
      images1: [
        require("../assets/collatz-details1.png"),
        require("../assets/collatz-details2.png")
      ]
    },
    {
      id: 8,
      head:
        "This is a large project (5k+ lines of code). It started out from an idea of recreating the old music player Winamp's visualiser, that showed some generative art while you listened to your songs. I started small with just the generative art part, researching and playing with techniques i could use in JS with the canvas element, and came up with a few algorithms. Then i devised a way to connect all the algorithms together in one shell, transition between them, and make them evolve. After that i started working on a music player and then added that to the shell, keeping it small and simple but stable, as the focus is on the art. All the while i kept having more ideas for algorithms, and it now has 50 of them, each doing a different thing. After that, i researched Electron to convert this browser based thing into a desktop app, and it works now in Mac or Win pc's, with further testing still to be done for mobile platforms. I intend to publish it as a paid app. It has got several Codepen Pick of the Day awards, one for the main app itself, and a few on individual algorithms!",
      images1: [
        require("../assets/spiral-details1.png"),
        require("../assets/spiral-details2.png"),
        require("../assets/spiral-details3.png"),
        require("../assets/spiral-details4.png"),
        require("../assets/spiral-details5.png")
      ],
      body:
        "Being such a big code base, i have worked on making the code as clear, documented, functional and practical as possible. Each algorithm is it's own class, and there is only one instance variable being used for all of them, since no two algorithms run at the same time. Common functions and helper methods than many of the classes may use have all been extracted to their own functions so they can be easily maintained and reused. The music player is decoupled from the generative art part and one can run independent of the other. The music player looks purposely very simple but has all the necessary features for listening to music while using the app. The interface is minimal, as suitable for this kind of program, but there is a help screen, a dashboard messages system, and hiding / showing the music player as well as many key controls to change the behaviour of the generative art.",
      images2: [
        require("../assets/spiral-details6.png"),
        require("../assets/spiral-details7.png"),
        require("../assets/spiral-details8.png"),
        require("../assets/spiral-details9.png"),
        require("../assets/spiral-details10.png"),
        require("../assets/spiral-details11.png"),
        require("../assets/spiral-details12.png"),
        require("../assets/spiral-details13.png"),
        require("../assets/spiral-details14.png"),
        require("../assets/spiral-details15.png")
      ],
      footer:
        "Other notable features include not repeating algorithms, auto adjusting to screen size and fullscreen mode, manual or automatic changing of algorithms (with duration controls), music playlist auto-scrolling on track changes, several transition modes triggered at random on algorithm changes, progress bar on the music player with skipping and Ion Icons for the buttons. There is a stunning variety of visuals and you can spend hours without seeing the same thing twice, as there are millions of variations.",
      images3: [
        require("../assets/spiral-details16.png"),
        require("../assets/spiral-details17.png"),
        require("../assets/spiral-details18.png"),
        require("../assets/spiral-details19.png"),
        require("../assets/spiral-details20.png"),
        require("../assets/spiral-details21.png"),
        require("../assets/spiral-details22.png"),
        require("../assets/spiral-details23.png"),
        require("../assets/spiral-details24.png"),
        require("../assets/spiral-details25.png")
      ]
    },
    {
      id: 10,
      head:
        "In programming or just in certain life situations, I often find myself in need of a random number so, as programmers do, i decided to build a program to do that for me. I also wanted to explore the Google Material Design trend for front-end apps, and since i was using Vue for this, i went with Vuetify. It's a great component library and it looks great, plus it has great documentation. Also doing custom validation on the inputs. I got carried away and ended up creating randomizers for letters, music keys (i do some music production as a hobby, too!), colors - very handy sometimes for web design - and explored a couple api's as well, one that gives you a random country (next holiday destination, anyone?), which is GraphQL based, and the other, REST based api gives you a Chuck Norris joke - they are kinda weak to be honest.",
      images1: [
        require("../assets/randomizer-details1.png"),
        require("../assets/randomizer-details2.png"),
        require("../assets/randomizer-details3.png"),
        require("../assets/randomizer-details4.png")
      ]
    },
    {
      id: 11,
      head:
        "This is a nice music player with pleasing aesthetics, that uses the File API to grab music files from your system and put them in a playlist. The playlist section dimensions itself to the tracks up to a maximum size, and then scrolls after that. On track changes, it auto scrolls to put the currently playing track in focus. There is also a minimized mode and it is responsive. The button actions all have checks and safeguards to make sure everything works properly and the interface is synced with the state. The code for this music player was then adapted to be included in my other project The Spiral that you can also see on my portfolio.",
      images1: [
        require("../assets/music-player-details1.png"),
        require("../assets/music-player-details2.png"),
        require("../assets/music-player-details3.png"),
        require("../assets/music-player-details4.png")
      ]
    },
    {
      id: 12,
      head:
        "These days, whenever I need an app to do something, I just go ahead and build it myself. Wanting to change some of my passwords to something more secure, i built this using Vue / Vuetify in a couple of hours. I really like Vuetify's components easy configurability via props, cutting down a lot on the amount of css you need. You can select the number of characters, and wether to use numbers and special symbols, as required per each password. Once it is generated, you have a handy button to copy it straight to the computer's clipboard for pasting. Don't forget to hit save password on your browser as these will be hard to remember! Or you can just generate another one.",
      images1: [
        require("../assets/password-gen-details1.png"),
        require("../assets/password-gen-details2.png"),
        require("../assets/password-gen-details3.png")
      ]
    },
    {
      id: 13,
      head:
        "This online portfolio / cv is built using Vue, Vuex and Tailwind, and is deployed on Netlify with a connection to the Github repo, that automatically updates the production version when i push a commit. My intention was to build a nice looking portfolio to showcase my personal projects, built using best practices, easy to update and maintain. So this SPA has 3 simple views with very little code, and inside the views everything is modularized in components that each do one thing and the data is all coming from Vuex. There is a common header and footer to all the pages, and then Vue Router changes the main block on page navigation. There is dynamic asset loading happening when the user changes the selected project on the portfolio page, and a custom contact form that emails the user and myself on send. Featured projects cards component was built leveraging Tailwind for ease of adding new projects. The courses portion of the About page is also a component that generates the markup just by adding the data in the Vuex module.",
      images1: [
        require("../assets/portfolio-details1.png"),
        require("../assets/portfolio-details2.png"),
        require("../assets/portfolio-details3.png")
      ],
      body:
        "On top of the base Tailwind css classes, i have added custom css wherever needed, and am using Vue transitions and transition groups in several places to create subtle animations. In the components, I am using most of the usual Vue options API, such as computed properties, methods, props, watchers and event emitters when i need to communicate changes up and down the app hierarchy. Another nice addition is a light/dark mode which i did using css variables. In Vuex, the state is modularized, so every component that needs state gets it's own Vuex module, which the main store then imports and distributes, making it very easy to update and maintain data.",
      images2: [
        require("../assets/portfolio-details4.png"),
        require("../assets/portfolio-details5.png"),
        require("../assets/portfolio-details6.png")
      ]
    },
    {
      id: 14,
      head:
        "This is an example of working with: asyncronous API calls, in this case getting data for the cards with an API key and Axios, and filtering over the deeply nested result to get only the pertinent information, and then build an interface that is modern and responsive, once again using Vuetify's Material design components. It also shows dealing with authorization and form validation, using Vuelidate in this case. This is meant as just an example of how I would do that, as the app still works without actual authentication, as there is no server side code attached. The whole app was bootstrapped using Nuxt.",
      images1: [
        require("../assets/catstagram-details1.png"),
        require("../assets/catstagram-details2.png"),
        require("../assets/catstagram-details3.png"),
        require("../assets/catstagram-details4.png"),
        require("../assets/catstagram-details5.png")
      ]
    },
    {
      id: 17,
      head:
        "This app showcases some of today's current trends in development, including React Hooks, both built-in and custom ones, and leveraging the power of Firebase for simplifying your backend and make it simultaneously more powerful. The app sends messages in realtime to all connected users of a chat room via Realtime Database. Users authenticate via Firebase too, where 2 methods are configured, via Google or Facebook. Firebase Functions being used for sending notifications to users, and Storage for file upload, which can be sent via the chat rooms. The hosting was also done via Firebase using their CLI. React Router is being used for navigation. Hooks being used include useRef, useState, useEffect, useParams, custom ones to deal with more specific things (check source code), and useCallback in conjuction with memo to optimize components wherever possible.",
      images1: [
        require("../assets/chat-details1.png"),
        require("../assets/chat-details2.png"),
        require("../assets/chat-details3.png"),
        require("../assets/chat-details4.png"),
        require("../assets/chat-details5.png")
      ],
      body:
        "There are a variety of modal windows for various features such as creting rooms and sending notifications. The user can change username and upload avatar picture, create rooms and adjust permissions to other users of the room such as make them admins. They can also delete their messages or like messages. Users will be asked by the browser if they want to allow notifications, which can be broadcast by a room admin to all its users. In chat files can be sent and uploaded / downloaded. Users can also record audio messages instead of text (browser will also ask for permission). The UI is super clean and uses a library i'd never used before called RSuite, specific for React, but definitely will be using again in the future! It is also responsive and looks good on any size screen.",
      images2: [
        require("../assets/chat-details6.png"),
        require("../assets/chat-details7.png"),
        require("../assets/chat-details8.png"),
        require("../assets/chat-details9.png")
      ]
    },
    {
      id: 19,
      head:
        "I wanted to do something that was simultaneously fun and related to my interests, but also a big challenge. Conceptualizing an architecture that would allow for very complex and inter-dependent state interactions, keeping all the state and UI in sync. I chose Vue and Vuex, a combination i quite like, with the approach to use all of Vuex's capabilities, namely using a module architecture to simplify the state management. There is a large amount of actions and mutations, with a lot of computed properties, watchers and components, with comunication between these being done with props passed down and emitters sending data back up to the parent.",
      images1: [
        require("../assets/idle-dj-details1.png"),
        require("../assets/idle-dj-details2.png"),
        require("../assets/idle-dj-details3.png"),
        require("../assets/idle-dj-details4.png")
      ],
      body:
        "Styling has been done using Sass with the .sass syntax, taking advantage of the variables, nesting and clean looking syntax, and the layout uses a mixture of CSS Grid and Flex, with responsive media queries to adjust to different sizes. Created a custom icons component for the multiple icons on the UI. There is only a single page view consisting of multi nested components. The complexity is in all the interactions, since almost all modules interact with each other, with a lot of data flows and state changes constantly happening. This is still a work in progress, I intend to refactor and optimize heavily after all the features are fully coded.",
      images2: [
        require("../assets/idle-dj-details5.png"),
        require("../assets/idle-dj-details6.png"),
        require("../assets/idle-dj-details7.png"),
        require("../assets/idle-dj-details8.png")
      ]
    }
  ]
};

export default details;
