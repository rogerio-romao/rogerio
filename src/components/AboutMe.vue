<template>
  <div class="about-me">
    <img
      class="float-right h-64 border border-gray-300 shadow-xl m-6"
      src="../assets/rogerio.jpg"
      alt="rogerio"
    />
    <div class="who p-8 leading-8">
      <h2 class="text-xl font-semibold text-blue-500">Who am I</h2>
      <p>
        Hi, I'm Rogerio! I have a nice easy-going personality, and am very easy
        to work with. I'm very passionate about doing things I like, and doing
        them well! And I love web development. I'm an avid and fast learner, a
        very calm person and I like to work hard. I have education background in
        IT and programming and have worked on it both professionally and as
        freelancer for some years. Life then took me into other lines of work, I
        had my own business (music school), and after that shop management. I've
        now gone back into the path of web development / coding and things
        couldn't be more interesting these days with the current state of
        technologies involved.
      </p>
    </div>
    <div class="why mt-4 p-8 leading-8">
      <h2 class="text-xl font-semibold text-blue-500">Why I code</h2>
      <p>
        Having decided that my previous line of work was not fulfilling me, had
        a deep thought about what it was I would like to work on, and this was
        the most natural decision, as I had that background to start with.
        Bought several online courses and couldn't be happier, going through
        them at a fast pace, and enjoying building my own programs applying what
        i've learnt, besides doing the course's projects. This involved from
        full back-end site deployments using NodeJS, Express, MongoDB, to small
        games using Unity and Construct3, to front-end apps apps using Vue,
        React, HTML5, CSS3, Javascript, Git & jQuery.
      </p>
    </div>
    <div class="where mt-4 p-8 leading-8">
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
    <div class="where mt-4 p-8 leading-8">
      <h2 class="text-xl text-blue-500 font-semibold">Technologies</h2>
      <p>
        HTML, CSS, Javascript, Vue, React, Vuex, Nuxt, Git, Bootstrap, Vuetify,
        Tailwind, Canvas Animations, Express, MongoDB, jQuery, NodeJS, Python...
      </p>
      <p>
        This website uses many of these, mainly Vue as the framework with heavy
        use of Vuex for the state, with bespoke components for every section of
        the app and clear separation of concerns between data and presentation,
        where i use Tailwind for the base CSS. <br />
        Here is the Github for the source code for this website:
        <a
          href="https://github.com/rogerio-romao/rogerio"
          target="_blank"
          class="text-small"
        >
          https://github.com/rogerio-romao/rogerio
        </a>
      </p>
    </div>
    <div class="where mt-4 p-8 leading-8">
      <h2 class="text-xl text-blue-500 font-semibold">Contact Me</h2>
      <p>
        If your company is looking for someone passionate, talented, creative,
        responsible and motivated... You can reach out to me through the email
        djgroovy@gmail.com or my mobile +44 0742 702 4976. Looking forward to
        hearing from you!
      </p>
    </div>
    <div class="where mt-4 p-8 leading-8">
      <h2 class="text-xl text-blue-500 font-semibold">Courses</h2>
      <p>
        Other than the courses listed below, i also regularly spend time
        learning using resources such as MDN, W3Schools, FreeCodeCamp - have
        done nearly all of their certifications. I also enjoy practicing by
        doing coding challenges / exercises in websites such as Codesignal
        (163125 points), Codewars(ranked 4kyu, 1293 points) and Edabit (8340
        xp).
      </p>
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
.about-me {
  background-color: var(--main-bg);
  color: var(--main-text);
}
ul {
  margin-top: 1em;
  margin-left: 0.5em;
}
a {
  color: var(--links);
}
a:hover {
  text-decoration: underline;
  color: var(--links-hover);
}
</style>
