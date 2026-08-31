<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
</script>

<template>
  <header>
    <Nav/>
  </header>

  <main>
    <PrivacyPolicyView/>
  </main>

  <footer>
    <Footer/>
  </footer>
</template>

<style scoped>

header {
  position: sticky;
  top: 0;

  display: flex;
  line-height: 1.5;
  background-color: var(--color-primary);
  padding: 0;

  z-index: 1000000;
}

main {
  background-color: var(--color-secondary);
  min-height: 100%;
  max-height: 100%;
  flex: 1;
}

footer {
  color: var(--color-secondary);
  background-color: var(--color-primary);
  padding: 0;

  margin-top: 3rem;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
