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
    }
  ]
};

export default details;
