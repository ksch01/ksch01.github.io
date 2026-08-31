<script setup lang="ts">
const props = defineProps<{
  href: string,
  title: string,
  active?: boolean
}>()

</script>

<template>
    <li>
        <a :href="href" :class="{active: active}">
            <slot/>
            <div v-if="title !== ''">{{ title }}</div>
            <slot name="right"/>
        </a>
    </li>
</template>

<style scoped>

li {
    width: 100%; 
    margin: 0;
    padding: 0;
}

a {
    position: relative;

    text-decoration: none;
    color: var(--color-secondary);

    transition: color 250ms;

    display: flex;
    gap: .75em;

    align-items: center;

    width: 100%;

    padding: .5em 1em;
}

a :deep(svg) {
    color: var(--color-secondary);
    transition: color 250ms;
}

a::after {
    content: "";
    position: absolute;

    width: 100%;
    height: 50%;

    top: 50%;
    left: 0;

    background: linear-gradient(
        0deg,
        color-mix(in srgb, var(--color-secondary) 25%, transparent) 0%,
        color-mix(in srgb, var(--color-secondary) 5%, transparent) 50%,
        transparent 100%
    );

    z-index: -1;

    opacity: 0;
    transition: opacity 350ms ease-in-out;
}
    
a.active::after {

    opacity: 1;
}

@media (min-width: 700px) {
    li {
        width: auto;
    }

    a {
        padding: 1.5em 1em;
        width: fit-content;
        height: calc(100% - 3em);
    }
}

a:hover {
    color: var(--color-secondary-highlight);
}
a:hover :deep(svg) {
    color: var(--color-secondary-highlight);
}

</style>