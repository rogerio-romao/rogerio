<template>
  <div class="featured bg-gray-900">
    <TopNav />
    <div class="cards border border-red-600 bg-black p-4">
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
  width: 330px;
  height: 490px;
}
</style>
