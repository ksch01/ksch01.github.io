<script setup lang="ts">
const props = defineProps<{
  side: "left" | "right";
}>();

const left = props.side === "left"

</script>

<template>
    <div class="divHero">
        <div class="divHeroLeft" :class="{divHeroMajor: left}">
            <slot name="left"/>
        </div>
        <div class="divHeroRight" :class="{divHeroMajor: !left}">
            <slot name="right"/>
        </div>
    </div>
</template>

<style scoped>

.divHero {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
}

.divHeroLeft {
    flex: 1 1 0;
    min-width: 0;
}

.divHeroRight {
    flex: 1 1 0;
    min-width: 0;
}

.divHeroMajor {
    flex: 2 1 0;
}

@media (min-width: 1000px) {
    .divHero {
        flex-direction: row;
        gap: 3rem;
    }
}

</style>