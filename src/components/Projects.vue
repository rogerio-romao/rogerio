<template>
    <div class="w-full h-full p-8 m-2 border grid grid-cols-main grid-rows-main">
        <div class="col-span-3 text-center">
          <i class="fas fa-arrow-up " @click="getNextImage"></i>
        </div>
        <div class="flex justify-center items-center">
           <i class="fas fa-arrow-left "></i>
        </div>
        <div class="p-4 main">
          <img class="main-image" :src="imagesFiltered" alt />
        </div>
        <div class="flex justify-center items-center">
          <i class="fas fa-arrow-right "></i>
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
                    url: 'converse.png'
                },
                {
                    id: 2,
                    url: 'todov3.png'
                },
                {
                    id: 3,
                    url: 'javascript-calc.png'
                },
                {
                    id: 4,
                    url: 'markdown-preview.png'
                },
                {
                    id: 5,
                    url: 'yelpcamp.png'
                }
            ],
            currentImage: 0
        }
    },
    watch: {
      currentImage: function() {
        this.$emit('projectChange', this.currentImage)
      }
    },
    methods: {
      getNextImage() {
        return this.currentImage++ 
      },
      getPreviousImage() {
        return this.currentImage--
      }  
    },
    computed: {
      imagesFiltered() {
        let index = this.currentImage;
        let pic = this.images[index].url
        return require('../assets/'+pic)
      },
      
      
    },
}
</script>