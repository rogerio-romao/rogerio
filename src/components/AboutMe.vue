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
        very calm person and i like to work hard. I have a background in IT and
        have worked on it both professionally and as freelancer some years ago,
        before life took me into other lines of work. I've now gone back into
        the path of web development / coding and things couldn't be more
        interesting these days with the current state of technologies involved.
      </p>
    </div>
    <div class="why mt-4 text-gray-200 p-8 leading-8">
      <h2 class="text-xl font-semibold text-blue-500">Why I code</h2>
      <p>
        Having decided that my previous line of work was not fulfilling, had a
        deep thought about what it was i would like to work on, and this was the
        most natural decision, as i had that background to start with. Bought
        several online courses and couldn't be happier, going through them at a
        fast pace, and enjoying building my own programs applying what i've
        learnt, besides doing the course's projects. This involved from full
        back-end site deployments using NodeJS, Express, MongoDB, to small games
        using Unity and Construct3, to front-end apps apps using Vue, React,
        HTML5, CSS3, Javascript, Git & jQuery.
      </p>
    </div>
    <div class="where mt-4 text-gray-200 p-8 leading-8">
      <h2 class="text-xl text-blue-500 font-semibold">Where I want to go</h2>
      <p>
        I see myself doing this passionately, continually improving and learning
        best practices and new developments. In terms of specialization, not
        sure yet, as i love all aspects of it, so i think full stack developer
        is the goal.
      </p>
    </div>
    <div class="where mt-4 text-gray-200 p-8 leading-8">
      <h2 class="text-xl text-blue-500 font-semibold">Technologies</h2>
      <p>
        HTML, CSS, Javascript, Vue, React, Vuex, Nuxt, Git, Bootstrap, Vuetify,
        Tailwind, Canvas Animations, Express, MongoDB, jQuery, NodeJS...
      </p>
    </div>
    <div class="where mt-4 text-gray-200 p-8">
      <h2 class="text-xl text-blue-500 font-semibold">Courses</h2>
      <div>
        <Courses />
      </div>
    </div>
    <div class="where mt-4 text-gray-200 p-8 leading-8">
      <h2 class="text-xl text-blue-500 font-semibold">Contact Me</h2>
      <p>
        You can reach out to me through the email djgroovy@gmail.com or my
        mobile +44 0742 702 4976. Looking forward to hearing from you!
      </p>
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
