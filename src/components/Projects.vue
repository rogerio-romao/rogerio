<template>
  <div class="w-full h-full p-8 m-2 grid grid-cols-main grid-rows-main">
    <div class="col-span-3 text-center mb-2 text-blue-800 hover:text-green-600">
      <i class="fas fa-arrow-up " @click="getNextImage"></i>
    </div>
    <div
      class="flex justify-center items-center text-blue-800 hover:text-green-600"
    >
      <i class="fas fa-arrow-left " @click="getPreviousImage"></i>
    </div>
    <div
      class="p-2 mx-auto main justify-center items-center border-gray-500 border-4 relative main-image"
      @mouseover="isHidden = true"
      @mouseleave="isHidden = false"
    >
      <transition>
        <div
          class="buttons text-gray-900 text-center absolute px-8 py-2"
          v-show="isHidden"
        >
          <a class="hover:bg-white shadow" :href="codeLive" target="_blank"
            >View Live</a
          >
          <a
            class="ml-3 hover:bg-white shadow"
            :href="codeSource"
            target="_blank"
            >Source Code</a
          >
        </div>
      </transition>
      <transition mode="out-in" name="fade">
        <img :key="this.currentImage" :src="imagesFiltered" alt />
      </transition>
    </div>
    <div
      class="flex justify-center items-center text-blue-800 hover:text-green-600"
    >
      <i class="fas fa-arrow-right " @click="getNextImage"></i>
    </div>
    <div class="col-span-3 text-center mt-2 text-blue-800 hover:text-green-600">
      <i class="fas fa-arrow-down " @click="getPreviousImage"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      isHidden: false,
      currentImage: 0
    };
  },
  watch: {
    currentImage: function() {
      this.$emit("projectChange", this.currentImage);
    }
  },
  methods: {
    getNextImage() {
      this.currentImage =
        (this.currentImage + 1) % this.$store.state.images.images.length;
      return this.currentImage;
    },
    getPreviousImage() {
      this.currentImage =
        this.currentImage - 1 < 0
          ? this.$store.state.images.images.length - 1
          : this.currentImage - 1;
      return this.currentImage;
    }
  },
  computed: {
    imagesFiltered() {
      let index = this.currentImage;
      let pic = this.$store.state.images.images[index].url;
      return require("../assets/" + pic);
    },
    codeSource() {
      let index = this.currentImage;
      let source = this.$store.state.images.images[index].source;
      return source;
    },
    codeLive() {
      let index = this.currentImage;
      let live = this.$store.state.images.images[index].live;
      return live;
    }
  }
};
</script>

<style>
.buttons a {
  padding: 3px 8px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.15s;
}
.buttons a:hover {
  border: 1px solid #111;
}
.main-image {
  width: 90%;
}
</style>
