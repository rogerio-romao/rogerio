<template>
  <div class="cards flex flex-wrap justify-center">
    <div
      class="card border rounded-lg shadow-md hover:shadow-xl bg-gray-200 hover:bg-white m-3 overflow-hidden relative"
      v-for="feature in features"
      :key="feature.id"
    >
      <div class="overflow-hidden">
        <img :src="feature.image" alt="" />
      </div>
      <div class="text-center text-xl font-bold text-indigo-800 mt-1">
        <h3>{{ feature.name }}</h3>
      </div>
      <div class="p-1 text-sm text-center">
        <p>{{ feature.shortDesc }}</p>
      </div>
      <hr class="mx-4" />
      <div class="text-xs p-2">
        <p>
          {{ feature.longDesc }}
        </p>
      </div>
      <div
        class="flex justify-around absolute w-full bottom-0 pb-1 border-t border-indigo-400 bg-indigo-300"
      >
        <button
          class="text-indigo-700 text-sm py-1 hover:text-gray-800 hover:bg-green-400 w-full"
        >
          <a :href="feature.source" target="_blank">Source</a>
        </button>
        <button
          class="text-indigo-700 text-sm py-1 hover:text-gray-800 hover:bg-green-400 w-full"
        >
          <a :href="feature.live" target="_blank">Live</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: this.$store.state.featured
    };
  }
};
</script>

<style>
.card {
  transition: all 0.25s ease-in-out;
}
.card img {
  transition: transform 0.8s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
}
.card:hover img {
  transform: scale(1.5);
}
button {
  transition: all 0.2s ease-in-out;
}
</style>
