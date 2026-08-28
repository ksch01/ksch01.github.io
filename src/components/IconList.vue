<script setup lang="ts">
import type { Tech } from '@/projects';

const props = defineProps<{
    techs: Array<Tech>
}>()
</script>

<template>
    <div class="iconList">
        <template v-for="tech in techs">
            <div class="listIcon" @click="(e : Event) => e.stopImmediatePropagation()">
                <img :src="tech.icon" :alt="tech.title"/>
                <span class="iconListLabel">{{ tech.title }}</span>
            </div>
        </template>
    </div>
</template>

<style scoped>
.iconList {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: .4rem;
}

.iconList img {
    height: 2rem;
}

.listIcon {
    position: relative;
}

.iconListLabel {
    position: absolute;

    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    color: black; 
    background: white;

    padding: .1em .5em;
    border-radius: 1em;

    opacity: 0;

    transition: opacity 200ms ease-in-out;

    text-align: center;
}

.listIcon:hover .iconListLabel {
    opacity: 1;
}
</style>