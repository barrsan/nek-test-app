<template>
  <div class="preloader">
    <div class="preloader__double-bounce1"></div>
    <div class="preloader__double-bounce2"></div>
  </div>
</template>


<script>
export default {
  name: 'AppPreloader',
};
</script>


<style>
.preloader {
  width: 30px;
  height: 30px;
  position: relative;
  display: inline-block;
}

.preloader__double-bounce1,
.preloader__double-bounce2 {
  position: absolute;
  background-color: blue;
  border-radius: 50%;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  animation: bounce 2s infinite ease-in-out;
}

.preloader__double-bounce2 {
  animation-delay: -1s;
  background-color: red;
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}
</style>

