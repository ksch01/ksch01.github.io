<script setup lang="ts">
</script>

<template>
    <a href="/">
        <svg fill="currentColor" viewBox="0 0 17.688196 32" xmlns="http://www.w3.org/2000/svg">
          <rect width="23.613272" height="3.3733244" x="-21.926609" y="20.940754" rx="1.6866622" transform="rotate(-45)" />
          <rect width="23.613272" height="3.3733244" x="0.7008087" y="-1.6866628" rx="1.6866622" transform="rotate(45)" />
        </svg>
        Zurück zur Startseite
    </a>
</template>

<style scoped>
a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    margin: 1em 0;
}

svg {
    aspect-ratio: 1;
    height: 1em;
    transform: rotate(180deg)
}

@media (min-width: 600px) {
    a {
        justify-content: start;
    }
}
</style>