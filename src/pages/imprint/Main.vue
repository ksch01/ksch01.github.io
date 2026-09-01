<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import ImprintView from '@/views/ImprintView.vue'
</script>

<template>
  <header id="header">
    <Nav/>
  </header>

  <main>
    <ImprintView/>
  </main>

  <footer id="footer">
    <Footer/>
  </footer>
</template>

<style scoped>
</style>
