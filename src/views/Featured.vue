<template>
  <div class="featured">
    <TopNav />
    <div class="cards border border-blue-300 bg-gray-200 p-4">
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
  display: inline-block;
  width: 250px;
  height: 350px;
}
</style>
