<template>
  <div id="app">
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-in-out;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
