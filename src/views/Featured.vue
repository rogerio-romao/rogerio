<template>
  <div class="featured bg-gray-100">
    <TopNav />
    <div class="cards border border-blue-500 bg-gray-600 p-4">
      <FeaturedCard />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import FeaturedCard from "@/components/FeaturedCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Featured",
  components: {
    FeaturedCard,
    TopNav,
    Footer
  }
};
</script>

<style>
.featured {
  margin: 0;
  padding: 1.5em;
}
.card {
  margin: 1em;
  display: inline-block;
  width: 280px;
  height: 410px;
}
</style>
