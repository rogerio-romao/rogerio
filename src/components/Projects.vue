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
      class="p-2 mx-auto main justify-center items-center border-blue-200 border-8 relative"
      @mouseover="isHidden = true"
      @mouseleave="isHidden = false"
    >
      <transition>
        <div class="buttons text-center absolute px-8 py-2" v-show="isHidden">
          <a :href="codeLive" target="_blank">View Live</a>
          <a class="ml-3" :href="codeSource" target="_blank">Source Code</a>
        </div>
      </transition>
      <img class="main-image" :src="imagesFiltered" alt />
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
      images: [
        {
          id: 1,
          url: "converse.png",
          source: "https://codepen.io/rogerio-romao/pen/RwPaaRR",
          live: "https://codepen.io/rogerio-romao/pen/RwPaaRR"
        },
        {
          id: 2,
          url: "todov3.png",
          source: "https://codepen.io/rogerio-romao/pen/KKpzXeG",
          live: "https://codepen.io/rogerio-romao/pen/KKpzXeG"
        },
        {
          id: 3,
          url: "javascript-calc.png",
          source: "https://codepen.io/rogerio-romao/pen/mdJWEMJ",
          live: "https://codepen.io/rogerio-romao/pen/mdJWEMJ"
        },
        {
          id: 4,
          url: "markdown-preview.png",
          source: "https://codepen.io/rogerio-romao/pen/dyoXWNb",
          live: "https://codepen.io/rogerio-romao/pen/dyoXWNb"
        },
        {
          id: 5,
          url: "yelpcamp.png",
          source: "#",
          live: "https://dry-escarpment-99868.herokuapp.com/"
        },
        {
          id: 6,
          url: "rock-smacker.png",
          source: "#",
          live: "https://gifted-lovelace-6d4cdb.netlify.com/"
        },
        {
          id: 7,
          url: "color-switch.png",
          source: "#",
          live: "https://jovial-roentgen-b310d8.netlify.com/"
        },
        {
          id: 8,
          url: "rock-paper-scissors.png",
          source: "https://codepen.io/rogerio-romao/pen/jObOzRN",
          live: "https://codepen.io/rogerio-romao/pen/jObOzRN"
        },
        {
          id: 9,
          url: "nuxt.png",
          source: "https://github.com/rogerio-romao/nuxt1",
          live: "https://nuxt-fundamentals-project.herokuapp.com"
        },
        {
          id: 10,
          url: "pomodoro.png",
          source: "https://codepen.io/rogerio-romao/pen/rNVPBJv",
          live: "https://codepen.io/rogerio-romao/pen/rNVPBJv"
        },
        {
          id: 11,
          url: "guess-number.png",
          source: "https://codepen.io/rogerio-romao/pen/XWbQbbN",
          live: "https://codepen.io/rogerio-romao/pen/XWbQbbN"
        },
        {
          id: 12,
          url: "jane-dev.png",
          source: "#",
          live: "https://sleepy-ptolemy-a4b71e.netlify.app/"
        },
        {
          id: 13,
          url: "zigzag.png",
          source: "https://codepen.io/rogerio-romao/details/vYNOdEv",
          live: "https://codepen.io/rogerio-romao/full/vYNOdEv"
        },
        {
          id: 14,
          url: "pokemon.png",
          source: "https://github.com/rogerio-romao/react-graphql",
          live: "https://wonderful-noether-0d72c3.netlify.app/"
        },
        {
          id: 15,
          url: "collatz.png",
          source: "https://codepen.io/rogerio-romao/pen/WNQxaWq",
          live: "https://codepen.io/rogerio-romao/full/WNQxaWq"
        },
        {
          id: 16,
          url: "avatars.png",
          source: "https://codepen.io/rogerio-romao/pen/zYvzmRp",
          live: "https://codepen.io/rogerio-romao/full/zYvzmRp"
        },
        {
          id: 17,
          url: "tic-tac.png",
          source: "https://github.com/rogerio-romao/tic-tac-toe",
          live: "https://objective-einstein-8e8c00.netlify.app/"
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
    },
    codeSource() {
      let index = this.currentImage;
      let source = this.images[index].source;
      return source;
    },
    codeLive() {
      let index = this.currentImage;
      let live = this.images[index].live;
      return live;
    }
  }
};
</script>

<style>
.buttons a {
  background: rgba(241, 230, 198, 0.7);
  padding: 3px 8px;
  border-radius: 8px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
