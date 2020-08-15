<template>
  <div class="home">
    <Portfolio />
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "AllProjects",
  components: {
    Portfolio
  }
};
</script>

<style>
.home {
  background-color: var(--main-bg);
}
</style>
