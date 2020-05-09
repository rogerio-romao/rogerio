<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
