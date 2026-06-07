<template>
  <div id="app">
    <transition name="slide-up" mode="out-in">
      <router-view />
    </transition>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from './components/BottomNav.vue';

export default {
  components: {
    BottomNav,
  },
};
</script>

<style>
/* 上滑动画 */
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter-to {
  transform: translateY(0%);
  opacity: 1;
}

.slide-up-leave-from {
  transform: translateY(0%);
  opacity: 1;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* 统一样式 */
body {
  margin: 0;
  background-color: #121212;
  color: white;
  font-family: 'Helvetica Neue', sans-serif;
}

input,
button {
  outline: none;
  border: none;
  font-family: inherit;
}

button {
  cursor: pointer;
}
</style>
