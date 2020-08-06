<template>
  <div class="cards flex flex-wrap justify-center">
    <div
      class="card border rounded-lg shadow-md hover:shadow-xl bg-gray-200 hover:bg-white m-3 overflow-hidden relative"
      v-for="feature in features"
      :key="feature.id"
    >
      <div class="overflow-hidden">
        <img :src="feature.image" alt="" />
        <img
          class="award"
          v-if="feature.id === 1"
          src="../assets/codepen-pick.png"
          alt=""
        />
      </div>
      <div class="bg-gray-100 titles">
        <div class="text-center text-2xl font-black text-indigo-800 mt-1">
          <h3>{{ feature.name }}</h3>
        </div>
        <div class="p-1 font-semibold text-center">
          <p>{{ feature.shortDesc }}</p>
        </div>
      </div>
      <hr class="mx-4" />
      <div class="text-xs p-2 small">
        <p>
          {{ feature.longDesc }}
        </p>
      </div>
      <div
        class="flex justify-around absolute w-full bottom-0 pb-1 border-t border-indigo-400 bg-indigo-300"
      >
        <button
          class="text-indigo-800 text-sm py-1 hover:text-gray-800 hover:bg-green-400 w-full"
        >
          <a :href="feature.source" target="_blank">Source</a>
        </button>
        <button
          class="text-indigo-800 text-sm py-1 hover:text-gray-800 hover:bg-green-400 w-full"
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
      features: this.$store.state.featured.featured
    };
  }
};
</script>

<style>
.card {
  font-family: "Hind", sans-serif;
  transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.card:hover {
  transform: scale(1.1);
  z-index: 20;
  border: 2px solid white;
}
.card:hover .award {
  opacity: 1;
}
.card:hover .titles {
  background-color: #fff;
}
button {
  transition: all 0.2s ease-in-out;
}
.award {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 60px;
  height: 60px;
  opacity: 0.7;
}
.small {
  font-size: 0.925em;
}
</style>
