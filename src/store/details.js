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
        "This was a huge full stack project, the final project of Colt Steele's online Bootcamp. It has a backend based on Express and MongoDB with Mongoose. There is authorization with Passport, and several API based services such as Cloudinary for uploading the images and Google Maps to show the location of the camps. Lots of npm packages used to build the app such as Moments.js for date / times and Bootstrap was used to help create the frontend. Used the AWS Cloud9 IDE for this one.",
      images1: [
        require("../assets/yelpcamp-details1.png"),
        require("../assets/yelpcamp-details2.png"),
        require("../assets/yelpcamp-details3.png"),
        require("../assets/yelpcamp-details4.png"),
        require("../assets/yelpcamp-details5.png")
      ]
    },
    {
      id: 10,
      head:
        "This was coded for the FreeCodeCamp front end certification challenges. We are given some user stories and have to build the app to pass a test suite that meets all those stories. I coded it in plain vanilla JS, the biggest challenge was to keep two separate timers with different intervals syncronised and cycling through seamlessly, and in the end i was pretty satisfied with how it turned out.",
      images1: [
        require("../assets/pomodoro-details1.png"),
        require("../assets/pomodoro-details2.png")
      ]
    },
    {
      id: 11,
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
      id: 15,
      head:
        "An article about the mathematical Collatz Sequence caught my attention and i thought it would be interesting and a fun challenge to create a visualizer for it. The user selects the starting number and then a graph animates the progression of the sequence. There is a lot of clever calculations going on in the background. The whole sequence is pre-rendered in memory to access certain variables, and the animation scales in both time and vertical scale depending on the input and output, with graphics laid out on top of the graph at the end with certain key statistic values.",
      images1: [
        require("../assets/collatz-details1.png"),
        require("../assets/collatz-details2.png")
      ]
    },
    {
      id: 18,
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
      id: 20,
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
      id: 21,
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
      id: 22,
      head:
        "These days, whenever I need an app to do something, I just go ahead and build it myself. Wanting to change some of my passwords to something more secure, i built this using Vue / Vuetify in a couple of hours. I really like Vuetify's components easy configurability via props, cutting down a lot on the amount of css you need. You can select the number of characters, and wether to use numbers and special symbols, as required per each password. Once it is generated, you have a handy button to copy it straight to the computer's clipboard for pasting. Don't forget to hit save password on your browser as these will be hard to remember! Or you can just generate another one.",
      images1: [
        require("../assets/password-gen-details1.png"),
        require("../assets/password-gen-details2.png"),
        require("../assets/password-gen-details3.png")
      ]
    }
  ]
};

export default details;
