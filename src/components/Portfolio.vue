<template>
  <div class="px-6 mx-auto folio">
    <div
      class="border border-red-600 theme-bg w-full h-full p-4 flex-col mx-auto"
    >
      <div class="w-full flex items-center mx-auto border-b pb-2">
        <h3 class="text-md font-semibold uppercase">Project Type:</h3>

        <span class="ml-3 align-text-bottom">{{ projType }}</span>
      </div>
      <div class="w-full flex mt-3 items-center border-b pb-2 flex-wrap">
        <h3 class="text-md font-semibold uppercase">Technologies used:</h3>
        <span
          class="ml-3 bg-red-800 no-select hover:bg-blue-600 text-white px-2 rounded-full text-xs sm:text-sm md:text-base"
          v-for="technology in this.$store.state.projects[this.currentProject]
            .technologies"
          :key="technology.name"
        >
          {{ technology }}
        </span>
      </div>
      <div class="w-full flex mt-3 items-center border-b pb-2 flex-wrap">
        <h3 class="text-md font-semibold uppercase">Project name:</h3>
        <transition mode="out-in" name="fade">
          <span
            :key="this.currentProject"
            class="text-xl text-blue-500 border-r border-l p-2 rounded-lg shadow-sm align-middle font-bold tracking-wide ml-3"
            >{{ projName }}</span
          >
        </transition>
        <span class="ml-3">
          {{ projShortDesc }}
        </span>
      </div>
      <Projects @projectChange="changeProject($event)" />
      <div class="description mt-5">
        <h3 class="text-md font-semibold uppercase text-center">
          Project Description
        </h3>
        <p class="mt-3">
          {{ projLongDesc }}
        </p>
      </div>
      <div v-if="showDetails" class="details mt-5 border-t">
        <h3 class="text-md font-semibold uppercase text-center mt-5">
          Project Details
        </h3>
        <p class="mt-3">
          {{ projDetails.head }}
        </p>
        <div class="detail-images mt-5 rounded-md">
          <img
            class="rounded-md border-gray-400 border-2 shadow-lg"
            v-for="image in projDetails.images1"
            :key="image"
            :src="image"
            alt="details from this project"
          />
        </div>
        <div v-if="projDetails.body" class="mt-5">
          <p>{{ projDetails.body }}</p>
          <div class="detail-images mt-5 rounded-md">
            <img
              class="rounded-md border-gray-400 border-2 shadow-lg"
              v-for="image in projDetails.images2"
              :key="image"
              :src="image"
              alt="details from this project"
            />
          </div>
        </div>
        <div v-if="projDetails.footer" class="mt-5">
          <p>{{ projDetails.footer }}</p>
          <div class="detail-images mt-5 rounded-md">
            <img
              class="rounded-md border-gray-400 border-2 shadow-lg"
              v-for="image in projDetails.images3"
              :key="image"
              :src="image"
              alt="details from this project"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "@/components/Projects.vue";

export default {
  methods: {
    changeProject(value) {
      if (value > this.$store.state.projects.length - 1) value = 0;
      this.currentProject = value;
    }
  },
  components: {
    Projects
  },
  data: function() {
    return {
      currentProject: 17
    };
  },
  computed: {
    projType() {
      return this.$store.state.projects[this.currentProject].type;
    },
    projName() {
      return this.$store.state.projects[this.currentProject].name;
    },
    projShortDesc() {
      return this.$store.state.projects[this.currentProject].shortDesc;
    },
    projLongDesc() {
      return this.$store.state.projects[this.currentProject].longDesc;
    },
    showDetails() {
      return this.$store.state.projects[this.currentProject].details;
    },
    projDetails() {
      return this.$store.state.details.find(
        detail =>
          detail.id === this.$store.state.projects[this.currentProject].id
      );
    }
  }
};
</script>

<style scoped>
.folio {
  background-color: var(--secondary-bg);
  color: var(--main-text);
}
.theme-bg {
  background-color: var(--main-bg);
}
.no-select {
  user-select: none;
}
.detail-images {
  width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-around;
}
</style>
