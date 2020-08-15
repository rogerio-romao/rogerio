<template>
  <div id="app">
    <TopNav />
    <transition mode="out-in" name="fade">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    TopNav,
    Footer
  }
};
</script>

<style>
:root {
  --main-bg: #1a202c;
  --secondary-bg: #000000;
  --font-color: #e2e8f0;
  --font-title: #e2e8f0;
  --font-hover: #9b2c2c;
  --main-text: #edf2f7;
  --links: #a0aec0;
  --links-hover: #2c5282;
  --text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.65),
    -3px -3px 3px rgba(0, 0, 0, 0.65);
}

body {
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 100;
  font-size: 1em;
  background-color: var(--secondary-bg);
  box-sizing: border-box;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
