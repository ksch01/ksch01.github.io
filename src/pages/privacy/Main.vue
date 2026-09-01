<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
</script>

<template>
  <header id="header">
    <Nav/>
  </header>

  <main>
    <PrivacyPolicyView/>
  </main>

  <footer id="footer">
    <Footer/>
  </footer>
</template>

<style scoped>
</style>
