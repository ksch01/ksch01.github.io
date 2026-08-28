<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const offset = ref(0);

function onScroll() {
    offset.value = window.scrollY * 0.35;
}

onMounted(() => {
    window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <svg class="svgBackground" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke-width="0" viewBox="0 0 1 1">
    <rect id="rect1" width="0.5" height="0.5" x="0" y="0.5"/>
    <path id="rect1-1" d="M 0 0 L 0 0.50022786 L 0.50022786 0.50022786 L 0.50022786 0.48265788 A 0.5 0.5 0 0 0 0.00051676432 0 L 0 0 z " />
    <path d="M 0.5,0.5 1,0 v 1 z" id="path1"/>
  </svg>
</template>

<style scoped>

.svgBackground {
  color: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 20rem;
  left: -5rem;

  width: 60vw;
  min-width: 1000px;
  max-width: 100vw;

  pointer-events: none;
  z-index: 0;

  animation: parallax linear;
  animation-timeline: scroll(root);
}

</style>