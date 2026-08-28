<script setup lang="ts">

const props = defineProps<{start: string, end: string}>()

</script>

<template>
    <div class="time">
        <h2>
            <span>{{ start }}</span>
            <span>–</span> 
            <span>{{ end }}</span>
        </h2>
    </div>
    <div class="content">
        <slot/>
    </div>
</template>

<style scoped>
.content {
    position: relative;
    width: calc(100% - 3em);

    grid-column: 2;

    padding: 0;
    margin-left: 3em;
}

.time {
    grid-column: 2;
    position: relative;

    text-align: center;

    justify-self: start;
}

.time h2 {
    position: relative;

    padding: .1em .3em;
    border-radius: .5em;

    margin: .2em 0;

    background-color: var(--color-primary);
    color: var(--color-secondary);

    z-index: 2;

    font-size: 1.4em;
}

.time h2 span {
    display: inline;
}

.content::before {
    content: "";
    position: absolute;

    left: -2em;

    width: .4em;
    height: 100%;
    background-color: var(--color-primary);

    z-index: 1;
}

.time::before {
    content: "";
    position: absolute;

    left: 1em;

    width: .4em;
    height: 100%;
    background-color: var(--color-primary);

    z-index: 1;
}

@media (min-width: 700px) {
    .time {
        grid-column: 1;
        justify-self: end;
    }

    .time::before {
        left: auto;
        right: 1em;
    }

    .content {
        width: calc(100% - 2em);
        margin-left: 2em;
    }

    .content::before {
        display: none;
    }
}
</style>