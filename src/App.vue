<template>
  <div id="app">
    <transition mode="out-in" name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style>
body {
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 100;
  font-size: 1em;
  background-color: #000;
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
