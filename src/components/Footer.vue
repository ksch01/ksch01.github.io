<script setup lang="ts">
</script>

<template>
    <div class="content sideShadows">
      <div class="footerContent">
        <svg class="svgFooter" viewBox="0 0 32 32" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path id="rect1" d="M 0,0 V 32.000114 H 16.000057 V 15.957166 A 16,16 0 0 0 0,0 Z" />
          <path id="path2" d="m 41.671022,12.156708 2e-6,17.941229 0,17.941227 -15.53756,-8.970613 -15.537559,-8.970613 15.537559,-8.970616 z" transform="matrix(0.51488136,0,0,0.89180072,10.544366,-10.841361)" />
        </svg>
        <div class="footerLinks">
          <a href="/impressum/">Impressum</a>
          <a href="/datenschutz/">Datenschutz</a>
        </div>
      </div>
    </div>
</template>

<style scoped>

.footerLinks {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  gap: 2rem;
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

.footerEnd {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
}

@media (min-width: 400px) {
  .footerLinks {
    flex-direction: row
  }
}

@media (min-width: 600px) {
  .footerEnd {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>