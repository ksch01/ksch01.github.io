<script setup lang="ts">

</script>

<template>
    <div class="empty"/>
    <div class="content">
        <slot/>
    </div>
</template>

<style scoped>
.content {
    width: calc(100% - 3em);

    grid-column: 2;

    padding: 0;
    margin-left: 3em;
}

.empty {
    position: relative;
}

.empty::before {
    content: "";
    position: absolute;

    left: 1em;

    width: .4em;
    height: 100%;
    background-color: var(--color-primary);

    z-index: 1;
}

@media (min-width: 700px) {
    .empty::before {
        left: auto;
        right: 1em;
    }

    .content {
        width: calc(100% - 2em);
        margin-left: 2em;
    }
}
</style>