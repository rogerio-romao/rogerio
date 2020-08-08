<template>
  <div class="about-me bg-black">
    <img
      class="float-right h-64 border border-gray-300 shadow-xl m-6"
      src="../assets/rogerio.jpg"
      alt="rogerio"
    />
    <div class="who text-gray-200 p-8 leading-8">
      <h2 class="text-xl font-semibold text-blue-500">Who am I</h2>
      <p>
        Hi, i'm Rogerio! I have a nice easy-going personality, and am very easy
        to work with. I'm very passionate about doing things i like, and doing
        them well! And i love web development. I'm an avid and fast learner, a
        very calm person and i like to work hard. I have education background in
        IT and programming and have worked on it both professionally and as
        freelancer for some years. Life then took me into other lines of work, i
        had my own business (music school), and after that shop management. I've
        now gone back into the path of web development / coding and things
        couldn't be more interesting these days with the current state of
        technologies involved.
      </p>
    </div>
    <div class="why mt-4 text-gray-200 p-8 leading-8">
      <h2 class="text-xl font-semibold text-blue-500">Why I code</h2>
      <p>
        Having decided that my previous line of work was not fulfilling me, had
        a deep thought about what it was i would like to work on, and this was
        the most natural decision, as i had that background to start with.
        Bought several online courses and couldn't be happier, going through
        them at a fast pace, and enjoying building my own programs applying what
        i've learnt, besides doing the course's projects. This involved from
        full back-end site deployments using NodeJS, Express, MongoDB, to small
        games using Unity and Construct3, to front-end apps apps using Vue,
        React, HTML5, CSS3, Javascript, Git & jQuery.
      </p>
    </div>
    <div class="where mt-4 text-gray-200 p-8 leading-8">
      <h2 class="text-xl text-blue-500 font-semibold">Where I want to go</h2>
      <p>
        I see myself doing this passionately, continually improving and learning
        best practices and new developments. I want to be a world class software
        engineer, and am applying myself hard to reach that goal - as can be
        seen by my portfolio. In the short term, the goal would be to get an
        interesting challenge in an interesting company, on a junior level, to
        learn and grow and provide value.
      </p>
    </div>
    <div class="where mt-4 text-gray-200 p-8 leading-8">
      <h2 class="text-xl text-blue-500 font-semibold">Technologies</h2>
      <p>
        HTML, CSS, Javascript, Vue, React, Vuex, Nuxt, Git, Bootstrap, Vuetify,
        Tailwind, Canvas Animations, Express, MongoDB, jQuery, NodeJS, Python...
      </p>
      <p>
        This website uses many of these, mainly Vue as the framework with heavy
        use of Vuex for the state, with bespoke components for every section of
        the app and clear separation of concerns between data and presentation,
        where i use Tailwind for the base CSS.
      </p>
    </div>
    <div class="where mt-4 text-gray-200 p-8 leading-8">
      <h2 class="text-xl text-blue-500 font-semibold">Contact Me</h2>
      <p>
        If your company is looking for someone passionate, talented, creative,
        responsible and motivated... You can reach out to me through the email
        djgroovy@gmail.com or my mobile +44 0742 702 4976. Looking forward to
        hearing from you, put me to the test!
      </p>
    </div>
    <div class="where mt-4 text-gray-200 p-8">
      <h2 class="text-xl text-blue-500 font-semibold">Courses</h2>
      <div>
        <Courses />
      </div>
    </div>
  </div>
</template>

<script>
import Courses from "./Courses";
export default {
  components: {
    Courses
  }
};
</script>

<style scoped>
ul {
  margin-top: 1em;
  margin-left: 0.5em;
}
a:hover {
  text-decoration: underline;
}
</style>
