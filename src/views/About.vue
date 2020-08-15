<template>
  <div class="about">
    <div class="border border-red-600 theme-bg px-4">
      <AboutMe />
    </div>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
export default {
  name: "About",
  components: {
    AboutMe
  }
};
</script>

<style>
.about {
  margin: 0 1em;
  padding: 0 0.5em;
  background-color: var(--secondary-bg);
}

.theme-bg {
  background-color: var(--main-bg);
}
</style>
