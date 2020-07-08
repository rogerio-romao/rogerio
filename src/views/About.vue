<template>
  <div class="about bg-gray-300">
    <TopNav />
    <div class="border border-green-400 bg-gray-100 p-4">
      <AboutMe />
    </div>
    <Footer />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";
import AboutMe from "@/components/AboutMe.vue";
export default {
  name: "About",
  components: {
    TopNav,
    AboutMe,
    Footer
  }
};
</script>

<style>
.about {
  margin: 0;
  padding: 1.5em;
}
</style>
