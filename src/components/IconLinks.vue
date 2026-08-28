<script setup lang="ts">
import githubIcon from "@/assets/icons/github.svg"

const props = defineProps<{
  github?: string
}>()
</script>

<template>
    <div class="iconLinks">
        <template v-if="github">
            <a class="iconLink" :href="github">
                <img :src="githubIcon"/>
            </a>
        </template>
    </div>
</template>

<style scoped>
.iconLinks {
    display: flex;

    justify-content: center;
    align-items: center;
}

.iconLink {
    display: flex;
}

.iconLinks img {
    width: 2rem;
    height: 2rem;

    transition: opacity 200ms ease-in-out;
    opacity: 1;
}

.iconLinks img:hover {
    opacity: .6;
}

</style>