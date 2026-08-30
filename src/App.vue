<script setup lang="ts">
import Nav from './components/Nav.vue'
</script>

<template>
  <header>
    <Nav/>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <div class="content">
      <div class="footerContent">
        <p class="footerStart">
          Kevin Schmidt
        </p>
        <svg class="svgFooter" viewBox="0 0 32 32" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path id="rect1" d="M 0,0 V 32.000114 H 16.000057 V 15.957166 A 16,16 0 0 0 0,0 Z" />
          <path id="path2" d="m 41.671022,12.156708 2e-6,17.941229 0,17.941227 -15.53756,-8.970613 -15.537559,-8.970613 15.537559,-8.970616 z" transform="matrix(0.51488136,0,0,0.89180072,10.544366,-10.841361)" />
        </svg>
        <p class="footerEnd">
          Developer Profile
        </p>
      </div>
      <div class="footerLinks">
        <RouterLink to="/impressum">Impressum</RouterLink>
        <RouterLink to="/datenschutz">Datenschutz</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footerStart {
  text-align: right;
  display: none;
}

header {
  position: sticky;
  top: 0;

  display: flex;
  line-height: 1.5;
  background-color: var(--color-primary);
  padding: 0;

  z-index: 1000000;
}

footer {
  color: var(--color-secondary);
  background-color: var(--color-primary);
  padding: 0;

  margin-top: 3rem;
}

.footerLinks {
  display: flex;
  justify-content: center;
  gap: 2rem;

  margin-bottom: 1.5rem;
}

.footerLinks a {
  color: var(--color-secondary);
}

.footerLinks a:hover {
  color: var(--color-secondary-highlight)
}

.footerContent {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;

  gap: 2rem;

  min-height: 5rem;

  padding-top: .5rem;
  padding-bottom: .5rem;
}

.svgFooter {
  height: 100%;
  max-height: 4em;
  aspect-ratio: 1;
}

main {
  background-color: var(--color-secondary);
  min-height: 100%;
  max-height: 100%;
  flex: 1;
}

.footerEnd {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
}

@media (min-width: 600px) {
  .footerStart {
    display: block;
  }

  .footerEnd {
    flex-direction: row;
    justify-content: space-between;
  }

  .footerContent {
    grid-template-columns: 1fr auto 1fr;
  }
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
