<template>
  <div class="about">
    <TopNav about="true" />
    <div class="border border-red-600 theme-bg p-4">
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
  background-color: var(--secondary-bg);
}

.theme-bg {
  background-color: var(--main-bg);
}
</style>
