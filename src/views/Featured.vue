<template>
  <div class="featured">
    <div class="cards border border-red-600 theme-bg p-4">
      <h1 class="text-center text-gray-600 text-2xl font-bold my-2">
        Featured Projects
      </h1>
      <p class="text-center text-gray-600 mb-2">
        A selection of some of my best projects. See the portfolio page for a
        bigger collection of works.
      </p>
      <hr />
      <FeaturedCard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FeaturedCard from "@/components/FeaturedCard.vue";

export default {
  name: "Featured",
  components: {
    FeaturedCard
  }
};
</script>

<style>
.featured {
  margin: 0;
  padding: 0 1.5em;
  background-color: var(--secondary-bg);
}
hr {
  margin: 20px 50px;
}
.card {
  margin: 1em;
  display: inline-block;
  width: 320px;
  height: 500px;
}
</style>
