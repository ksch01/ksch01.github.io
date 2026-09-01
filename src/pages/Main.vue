<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import MainView from '@/views/MainView.vue'
</script>

<template>
  <header id="header">
    <Nav/>
  </header>

  <main>
    <MainView/>
  </main>

  <footer id="footer">
    <Footer/>
  </footer>
</template>

<style scoped>
</style>
