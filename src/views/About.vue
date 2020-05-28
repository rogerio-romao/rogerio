<template>
  <div class="about">
    <TopNav />
    <Footer />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  components: {
    TopNav,
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
