<template>
  <div class="featured">
    <div class="cards border border-red-600 theme-bg p-4">
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

.card {
  margin: 1em;
  display: inline-block;
  width: 320px;
  height: 500px;
}
</style>
