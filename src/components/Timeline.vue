<script setup lang="ts">

</script>

<template>
    <div class="timeline">
        <div class="first"/>
        <div></div>
        <slot/>
        <div class="last"/>
        <div></div>
    </div>
</template>

<style scoped>
.timeline {
    display: grid;

    table-layout: fixed;
    grid-template-columns: 1fr;

    margin-top: 1em;
}

.first, .last {
    position: relative;

    height: 2em;
}

.first::before, .last::before {
    content: "";
    position: absolute;

    left: 1em;

    width: .4em;
    height: 100%;

    z-index: 1;
}

.first::before {
    background: linear-gradient(
        180deg,
        var(--color-secondary),
        var(--color-primary)
    );
}

.last::before {
    background: linear-gradient(
        0deg,
        var(--color-secondary),
        var(--color-primary)
    );
}

@media (min-width: 700px) {
    .timeline {
        grid-template-columns: auto 1fr;
    }

    .first::before, .last::before {
        left: auto;
        right: 1em;
    }
}

@media (min-width: 1000px){
    .timeline {
        margin-top: 0em;
    }
}
</style>