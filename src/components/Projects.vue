<template>
  <div class="w-full h-full p-8 m-2 border grid grid-cols-main grid-rows-main">
    <div class="col-span-3 text-center">
      <i class="fas fa-arrow-up " @click="getNextImage"></i>
    </div>
    <div class="flex justify-center items-center">
      <i class="fas fa-arrow-left " @click="getPreviousImage"></i>
    </div>
    <div class="p-2 mx-auto main justify-center items-center border-8">
      <img class="main-image" :src="imagesFiltered" alt />
    </div>
    <div class="flex justify-center items-center">
      <i class="fas fa-arrow-right " @click="getNextImage"></i>
    </div>
    <div class="col-span-3 text-center">
      <i class="fas fa-arrow-down " @click="getPreviousImage"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      images: [
        {
          id: 1,
          url: "converse.png"
        },
        {
          id: 2,
          url: "todov3.png"
        },
        {
          id: 3,
          url: "javascript-calc.png"
        },
        {
          id: 4,
          url: "markdown-preview.png"
        },
        {
          id: 5,
          url: "yelpcamp.png"
        },
        {
          id: 6,
          url: "rock-smacker.png"
        },
        {
          id: 7,
          url: "color-switch.png"
        },
        {
          id: 8,
          url: "rock-paper-scissors.png"
        },
        {
          id: 9,
          url: "nuxt.png"
        },
        {
          id: 10,
          url: "pomodoro.png"
        },
        {
          id: 11,
          url: "guess-number.png"
        },
        {
          id: 12,
          url: "jane-dev.png"
        },
        {
          id: 13,
          url: "zigzag.png"
        },
        {
          id: 14,
          url: "pokemon.png"
        }
      ],
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
      this.currentImage = (this.currentImage + 1) % this.images.length;
      return this.currentImage;
    },
    getPreviousImage() {
      this.currentImage =
        this.currentImage - 1 < 0
          ? this.images.length - 1
          : this.currentImage - 1;
      return this.currentImage;
    }
  },
  computed: {
    imagesFiltered() {
      let index = this.currentImage;
      let pic = this.images[index].url;
      return require("../assets/" + pic);
    }
  }
};
</script>
