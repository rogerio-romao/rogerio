<template>
  <div class="w-full h-full p-8 m-2 grid grid-cols-main grid-rows-main">
    <div class="col-span-3 text-center mb-2 text-blue-800 hover:text-green-600">
      <i
        class="fas fa-arrow-up"
        title="Click or use arrow keys"
        @click="getNextImage"
      ></i>
    </div>
    <div
      class="flex left mr-1 justify-center items-center text-blue-800 hover:text-green-600"
    >
      <i
        class="fas fa-arrow-left"
        title="Click or use arrow keys"
        @click="getPreviousImage"
      ></i>
    </div>
    <div
      class="p-2 mx-auto main justify-center items-center border-gray-500 border-4 relative main-image overflow-hidden"
      @mouseover="isHidden = true"
      @mouseleave="isHidden = false"
    >
      <div
        class="buttons text-gray-900 text-center absolute px-8 py-2"
        v-show="isHidden"
      >
        <a class="hover:bg-white shadow" :href="codeLive" target="_blank"
          >View Live</a
        >
        <a class="ml-3 hover:bg-white shadow" :href="codeSource" target="_blank"
          >Source Code</a
        >
      </div>
      <img :src="imagesFiltered" alt="screenshot of the project" />
    </div>
    <div
      class="flex right ml-1 justify-center items-center text-blue-800 hover:text-green-600"
    >
      <i
        class="fas fa-arrow-right"
        title="Click or use arrow keys"
        @click="getNextImage"
      ></i>
    </div>
    <div class="col-span-3 text-center mt-2 text-blue-800 hover:text-green-600">
      <i
        class="fas fa-arrow-down"
        title="Click or use arrow keys"
        @click="getPreviousImage"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  mounted() {
    window.addEventListener("keyup", e => {
      switch (e.keyCode) {
        case 37:
        case 40:
          this.getPreviousImage();
          break;
        case 38:
        case 39:
          this.getNextImage();
          break;
        default:
          break;
      }
    });
  },
  data() {
    return {
      isHidden: false,
      currentImage: 17
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
  color: #111;
}
.buttons a:hover {
  border: 1px solid #111;
}
.main-image {
  max-width: 800px;
  max-height: 516px;
}

@media (max-width: 600px) {
  .left,
  .right {
    display: none;
  }
}
</style>
